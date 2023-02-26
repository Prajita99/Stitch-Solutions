import { useRef } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sust from "./components/Sust";

function App() {
  const cardRef = useRef(null);
  const sustRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div className="">
      <Navbar
        props={{ designs: cardRef, sust: sustRef, contact: contactRef }}
      />
      <div ref={homeRef}>
        <Body />
      </div>
      <div ref={cardRef}>
        <Cards />
      </div>
      <div ref={sustRef}>
        <Sust />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
