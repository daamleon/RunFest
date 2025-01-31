import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
