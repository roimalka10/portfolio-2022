import React from "react";
import "./css/main-styles.css";
import Header from "./components/Header";
import ContactButton from "./components/ContactButton";
import HomeGallery from "./components/HomeGallery";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContactButton />
      <HomeGallery />
    </div>
  );
};

export default App;
