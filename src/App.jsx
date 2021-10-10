import React from "react";
import Intro from "./components/Intro/Intro";
import Testimonial from "./components/Testimonial/Testimonial";
import Toper from "./components/Toper/Toper";
import Work from "./components/Work/Work";
import Contract from "./components/Contract/Contract";
import './App.scss';
import MyProtfolio from "./components/MyProtfolio/MyProtfolio";
import { useState } from "react";
import Menu from "./components/Menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Toper menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro></Intro>
        <MyProtfolio />
        <Work></Work>
        <Testimonial></Testimonial>
        <Contract></Contract>
      </div>
    </div>
  );
}

export default App;
