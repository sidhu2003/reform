import "./App.css";
import Home from "./pages/home/Home";
import styles from "./components/Header/styles.module.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      var header = document.getElementById("header");
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        header.classList.add(styles.header_scrolled);
      } else {
        header.classList.remove(styles.header_scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
