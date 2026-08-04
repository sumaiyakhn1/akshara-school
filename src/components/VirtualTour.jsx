import { Link } from "react-router-dom";

function VirtualTour() {
  return (
    <section className="section">
      <div className="container">

        <div className="vt-wrap reveal-zoom">

          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop"
            alt="Akshara International School campus aerial view"
          />

          <div className="vt-content">

            <h3>Take a Virtual Tour</h3>

            <p>
              Walk through our classrooms, labs and grounds —
              from wherever you are.
            </p>

            <Link
              to="/gallery"
              className="btn btn-ghost"
              style={{ marginTop: "20px", width: "fit-content" }}
            >
              View Gallery
            </Link>

          </div>

          <button className="vt-play">

            ▶

          </button>

        </div>

      </div>
    </section>
  );
}

export default VirtualTour;