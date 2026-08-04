import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <a href="tel:+918050880622">+91-8050880622</a>

            <a href="mailto:info@akshara-international-school.org">
              info@akshara-international-school.org
            </a>
          </div>

          <div className="topbar-right">
            <span className="topbar-admission">
              CBSE Affiliation No. 531811
            </span>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="brand">
              <img
                src="/logo.png"
                alt="Logo"
                className="brand-crest"
              />

              <span className="brand-text">
                <span className="name">
                  Akshara International
                </span>

                <br />

                <span className="tag">
                  A FAMILY FOR LEARNING
                </span>
              </span>
            </Link>

            <nav className="main-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;