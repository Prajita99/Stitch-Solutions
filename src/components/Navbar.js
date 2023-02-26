import React from "react";
import Contact from "./Contact";
import SearchBar from "./SearchBar";
import Body from "./Body";
import Cards from "./Cards";
import Sust from "./Sust";
import { element } from "prop-types";

function Navbar({ props }) {
  const scrollToComponent = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              onClick={() => scrollToComponent(props.home)}
              href="#"
              className="nav-link"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollToComponent(props.designs)}
              href="#our-designs"
              className="nav-link"
            >
              Our Designs
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollToComponent(props.sust)}
              href="#sustainable-solutions"
              className="nav-link"
            >
              Sustainable Solutions
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollToComponent(props.contact)}
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>
          </li>
          <li className="search">
            <SearchBar />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
