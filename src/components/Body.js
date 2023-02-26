import React from "react";
import knitting from "../images/knitting.jpg";

const Body = () => {
  return (
    <>
      <div className="image-container">
        <img src={knitting} alt="My Image" className="image" />
        <div className="overlay">
          <h2>Fashion Made Sustainable</h2>
          <p>
            Look good as well as be a part of world changers with our
            sustainable designs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
