import { Link } from "react-router-dom";

function LatestNews() {
  return (
    <section className="section bg-tint">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            News & Updates
          </span>

          <h2>
            What's happening at Akshara
          </h2>

        </div>

        <div className="news-grid">

          <div className="news-card">

            <div className="n-img">

              <img
                src="https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=600&auto=format&fit=crop"
                alt="Admissions announcement"
              />

              <div className="n-date">
                <div className="d">12</div>
                <div className="m">Aug</div>
              </div>

            </div>

            <div className="news-body">

              <span className="news-tag">
                Admissions
              </span>

              <h4>
                Admissions Open for Session 2026–27
              </h4>

              <Link
                to="/admissions"
                className="n-link"
              >
                Read More →
              </Link>

            </div>

          </div>

          <div className="news-card">

            <div className="n-img">

              <img
                src="https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=600&auto=format&fit=crop"
                alt="Olympiad results"
              />

              <div className="n-date">
                <div className="d">28</div>
                <div className="m">Jul</div>
              </div>

            </div>

            <div className="news-body">

              <span className="news-tag">
                Achievement
              </span>

              <h4>
                Students Shine at the National Science Olympiad
              </h4>

              <Link
                to="/about"
                className="n-link"
              >
                Read More →
              </Link>

            </div>

          </div>

          <div className="news-card">

            <div className="n-img">

              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
                alt="Annual day"
              />

              <div className="n-date">
                <div className="d">05</div>
                <div className="m">Sep</div>
              </div>

            </div>

            <div className="news-body">

              <span className="news-tag">
                Events
              </span>

              <h4>
                Annual Day Rehearsals Begin This Month
              </h4>

              <Link
                to="/gallery"
                className="n-link"
              >
                Read More →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LatestNews;