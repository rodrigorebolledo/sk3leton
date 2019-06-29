import React from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
