import Cloth from "../images/Cloth.jpg";
import Woman from "../images/Woman.jpg";
import Girl from "../images/Girl.jpg";

export default function Cards() {
  return (
    <>
      <div className="h1">
        <h1>Our Designs</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Cloth} className="img" />
        </div>

        <div className="card">
          <img src={Woman} className="img" />
        </div>

        <div className="card">
          <img src={Girl} className="img" />
        </div>
      </div>
    </>
  );
}
