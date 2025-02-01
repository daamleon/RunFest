import React, { useState, useRef } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import MainContent from "./components/MainContent";
import Footer from "./components/footer";
import NavMobile from "./components/NavMobile";
import Sponsor from "./components/Sponsor";
import EmbedEvent from "./components/EmbedEvent";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const embedRef = useRef(null);

  const handleShowEmbed = () => {
    setShowEmbed(true);
    setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-orange-500">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="pt-12 flex-1 overflow-auto">
        <Hero handleShowEmbed={handleShowEmbed} />
        {showEmbed && (
          <div ref={embedRef}>
            <EmbedEvent handleClose={handleCloseEmbed} />
          </div>
        )}
        <MainContent />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
