import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Heading from "./Components/Hero/Heading";
import HeroImg from "./Components/HeroImg/HeroImg";
import Paragraph from "./Components/Paragraph/Paragraph";
import Searchbar from "./Components/SearchBar/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <div className="left-container">
          <Heading />
          <Paragraph />
          <Searchbar />
        </div>
        <div className="right-container">
          <HeroImg />
        </div>
      </main>
    </div>
  );
}

export default App;
