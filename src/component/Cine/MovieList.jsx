import { getAllMovies } from "../../data/movies";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
