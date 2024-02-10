import { useContext } from "react";
import MovieList from "../component/Cine/MovieList";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Sidebar from "../component/MainLayout/Sidebar";
import ThemeContext from "../ThemeContext";

const Page = () => {

  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid md:grid-cols-[200px_1fr] lg:grid-cols-2 gap-[1rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
