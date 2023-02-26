import React from "react";
import Patagonia from "../images/Patagonia.jpg";
import Levis from "../images/Levis.jpg";
import Stella from "../images/Stella.png";
import Everlane from "../images/Everlane.jpeg";
import HM from "../images/H&M.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Sust = () => {
  return (
    <div>
      <>
        <div className="sust">
          <h1>Sustainable Solutions</h1>
        </div>
        <div className="sust-container">
          <div className="cards">
            <img src={Patagonia} className="picture" />
          </div>

          <div className="cards">
            <img src={Levis} className="picture" />
          </div>

          <div className="cards">
            <img src={Stella} className="picture" />
          </div>

          <div className="cards">
            <img src={Everlane} className="picture" />
          </div>

          <div className="cards">
            <img src={HM} className="picture" />
          </div>
          <div className="next">
            <NavigateNextIcon />
          </div>
        </div>
      </>
    </div>
  );
};

export default Sust;
