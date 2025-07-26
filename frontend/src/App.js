import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import GridBackground from "./components/GridBackground";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GridBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;