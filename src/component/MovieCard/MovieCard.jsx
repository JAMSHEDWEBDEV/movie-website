import { useContext, useState } from "react";
import { getImgUrl } from "../../utilities/cine-utilities";
import Rating from "../Rating/Rating";
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal";
import MovieContext from "../../Context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {cartData,setCartData}= useContext(MovieContext);

  const handleAddToCart = (event,movie) =>{
    event.stopPropagation();
    
    const found = cartData.find(item => {
      return item.id === movie.id;
    })
    if(!found){
      setCartData([...cartData,movie]);
    }else{
      console.error(`The move ${movie.title} has been added to the card already`);
    }
}

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) =>{
    setSelectedMovie(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal 
        movie={selectedMovie} 
        onClose={handleModalClose}
        onCartAdd={handleAddToCart} 
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt="pic"
          />
          <figcaption className="pt-4">
            <h3 className="text-lg mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-[10px] mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-1 flex items-center justify-center gap-1 text-[#171923] font-semibold text-[12px]"
              href="#"
              onClick={(e)=>handleAddToCart(e,movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
