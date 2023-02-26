export default function Footer() {
  return (
    <>
      <br />
      <footer>
        <div className="footer-row">
          <div className="connect">
            <h2>Connect with us</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i> Chabahil,
              Kathmandu
            </p>
          </div>
          <div className="footer-column">
            <div className="footer-social">
              <a href="">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
            </div>

            <div className="footer-copy">
              <p>Copyright &copy; 2023 - Present</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
