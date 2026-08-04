import { Link } from "react-router-dom";

function AdmissionCTA() {
  return (
    <section className="section">

      <div className="container">

        <div className="cta-band">

          <div>

            <h3>
              Admissions Open for Session 2026–27
            </h3>

            <p>
              Give your child the opportunity to learn, grow and
              excel in a nurturing environment. Admissions are now
              open from Pre-Primary to Senior Secondary.
            </p>

          </div>

          <div className="cta-actions">

            <Link
              to="/admissions"
              className="btn btn-primary"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="btn btn-ghost"
            >
              Book Campus Visit
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdmissionCTA;