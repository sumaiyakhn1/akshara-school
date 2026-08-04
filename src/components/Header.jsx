import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo2.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}

      <div className="topbar">

        <div className="container">

          <div className="topbar-left">

            <a href="tel:+918050880622">
              +91-8050880622
            </a>

            <a href="mailto:info@akshara-international-school.org">
              info@akshara-international-school.org
            </a>

            <span>Pehowa, Haryana</span>

          </div>

          <div className="topbar-right">

            <span className="topbar-admission">
              CBSE Affiliation No. 531811
            </span>

          </div>

        </div>

      </div>

      {/* Navbar */}

      <header
        className={`site-header ${scrolled ? "scrolled" : ""}`}
      >

        <div className="nav-wrap">

          <div className="container">

            <div className="nav-inner">

              {/* Logo */}

              <Link
                to="/"
                className="brand"
              >

                <img
  src={logo}
  alt="Akshara International School"
  className="brand-crest"
/>

                <div className="brand-text">

                  <span className="name">
                    Akshara International
                  </span>

                  <span className="tag">
                    A FAMILY FOR LEARNING
                  </span>

                </div>

              </Link>

              {/* Navigation */}

              <nav className="main-nav">

                <ul>

                  <li>
                    <Link
                      className={
                        location.pathname === "/"
                          ? "active"
                          : ""
                      }
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={
                        location.pathname === "/about"
                          ? "active"
                          : ""
                      }
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      Facilities
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      Academics
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={
                        location.pathname === "/gallery"
                          ? "active"
                          : ""
                      }
                      to="/gallery"
                    >
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      Contact
                    </Link>
                  </li>

                </ul>

              </nav>

              {/* Apply Button */}

              <Link
                to="/admissions"
                className="btn btn-primary"
              >
                Apply Now
              </Link>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}

export default Header;