import React from "react";
import "./css/main-styles.css";
import "./css/UpButton.css";
import Header from "./components/Header";
import ContactButton from "./components/ContactButton";
import HomeGallery from "./components/HomeGallery";
import Projects from "./components/Projects";
import NewsList from "./components/NewsList";
import ScrollToTop from "react-scroll-to-top";
import { ImArrowUp2 } from "react-icons/im";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContactButton />
      <HomeGallery />
      <Projects />
      <NewsList />
      <ScrollToTop smooth className="up-button" component={<ImArrowUp2 />} />
    </div>
  );
};

export default App;
