import React, { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import MainContent from "./components/MainContent";
import Footer from "./components/footer";
import NavMobile from "./components/NavMobile";
import Sponsor from "./components/Sponsor";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col bg-orange-500">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="pt-12 flex-1 overflow-auto">
        <Hero />
        <MainContent />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
