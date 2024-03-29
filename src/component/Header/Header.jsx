import Logo from "../../assets/icons/logo.svg";
import Ring from "../../assets/icons/ring.svg";
import Moon from "../../assets/icons/moon.svg";
import Sun from "../../assets/icons/sun.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "../Cart/CartDetails";
import MovieContext from "../../Context";
import ThemeContext from "../../ThemeContext";

const Header = () => {

  const [showCart, setShowCart] = useState(false);
  const {cartData} = useContext(MovieContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  
  const handleCartShow = () =>{
    setShowCart(true);
  }

  return (
    <header>
      {
        showCart && <CartDetails onClose={()=>setShowCart(false)}/>
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img 
          src={Logo} 
          width="139" 
          height="26" 
          alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img 
              src={Ring} 
              width="24" 
              height="24" 
              alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setDarkMode(darkMode => !darkMode)}
            >
              <img
                src={darkMode? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="cart"
              />
              {
                cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[24px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                    </span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
