import React from "react";
import NavBar from "./Componets/NavBar/NavBar";
import Intro from "./Componets/Intro/Intro";
import Skills from "./Componets/Skills/Skills";
import Projects from "./Componets/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
