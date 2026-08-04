import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="foot">

      <div className="container">

        <div className="foot-grid">

          {/* Column 1 */}

          <div>

            <div className="foot-brand">

              <img
                className="brand-crest"
                src="/images/logo.png"
                alt="Akshara International School"
                width="46"
                height="46"
              />

              <div>
                <span className="name">
                  Akshara International
                </span>
                <br />
                <span className="tag">
                  A Family For Learning
                </span>
              </div>

            </div>

            <p style={{ fontSize: "14px" }}>
              A CBSE-affiliated school in Pehowa, Haryana,
              dedicated to raising confident, capable and
              grounded learners.
            </p>

            <div
              className="foot-social"
              style={{ marginTop: "22px" }}
            >
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>

          </div>

          {/* Column 2 */}

          <div className="foot-col">

            <h5>Quick Links</h5>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About Us</Link></li>

              <li><Link to="/academics">Academics</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>
                    {/* Column 3 */}

          <div className="foot-col">

            <h5>Useful Links</h5>

            <ul>

              <li><Link to="/admissions">Admissions</Link></li>

              <li><Link to="/facilities">Facilities</Link></li>

              <li><Link to="/mandatory-disclosure">Mandatory Disclosure</Link></li>

              <li><Link to="/privacy-policy">Privacy Policy</Link></li>

              <li><Link to="/terms">Terms & Conditions</Link></li>

            </ul>

          </div>

          {/* Column 4 */}

          <div className="foot-col">

            <h5>Contact Us</h5>

            <ul className="foot-contact">

              <li>
                📍 Ambala Road, Pehowa,
                Kurukshetra, Haryana
              </li>

              <li>
                📞 +91-XXXXXXXXXX
              </li>

              <li>
                ✉ info@aksharainternationalschool.com
              </li>

              <li>
                🕒 Mon - Sat : 8:00 AM - 3:00 PM
              </li>

            </ul>

          </div>

        </div>

        <div className="foot-bottom">

          <p>
            © 2026 Akshara International School. All Rights Reserved.
          </p>

          <div>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            {" | "}

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;