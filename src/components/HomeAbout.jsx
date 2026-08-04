import { Link } from "react-router-dom";
// import founderImg from "../assets/images/founder.jpg";
// import chairpersonImg from "../assets/images/chairperson.jpg";
// import principalImg from "../assets/images/principal.jpg";
// import aboutImg from "../assets/images/about.jpg";

function HomeAbout() {
  return (
    <section className="section section-tight" id="about">
      <div className="container">

        <div className="about-grid">

          <div className="about-media">

            <div className="frame">
              <img
                src="/images/about.jpg"
                alt="Akshara International School"
              />
            </div>

            <div className="float-badge">

              <div className="icon-circle">
                🎓
              </div>

              <div>
                <strong>CBSE Affiliated</strong>
                <span>Affiliation No. 531811</span>
              </div>

            </div>

          </div>

          <div className="about-copy">

            <span className="eyebrow">
              Welcome to Akshara
            </span>

            <h2>
              A verdant campus,
              an even warmer welcome
            </h2>

            <p>
              Set along the Ambala–Kaithal Bypass, Pehowa,
              Akshara International School provides quality
              education with modern infrastructure and
              experienced faculty.
            </p>

            <p>
              We focus on academic excellence, discipline,
              innovation and holistic development to prepare
              every child for a successful future.
            </p>

            <div className="quote">
              "Every child deserves a safe, inspiring and joyful
              place to learn."
            </div>

            <div className="about-signoff">

              <img
                src="/images/principal.jpg"
                alt="Principal"
              />

              <div>
                <strong>Principal</strong>
                <span>Akshara International School</span>
              </div>

            </div>

            <Link
              to="/about"
              className="btn btn-primary"
            >
              Read More
            </Link>


          </div>

        </div>

      </div>
      <div className="leaders-grid">

  <div className="leader-card">

    <img
      src="/images/founder.jpg"
      alt="Founder"
      className="leader-img"
    />

    <h3>Sh. Baldev Raj Kahra</h3>

    <span className="leader-role">
      FOUNDER
    </span>

    <p>
      The vision behind Akshara — a school that treats every
      student as family, not a footnote.
    </p>

    <Link to="/about" className="btn btn-primary">
      Founder's Message
    </Link>

  </div>

  <div className="leader-card">

    <img
      src="/images/chairperson.jpg"
      alt="Chairperson"
      className="leader-img"
    />

    <h3>Mrs. Poonam Kahra</h3>

    <span className="leader-role">
      CHAIRPERSON
    </span>

    <p>
      Guiding the school's culture with an emphasis on care,
      character and community partnership.
    </p>

    <Link to="/about" className="btn btn-primary">
      Chairperson's Message
    </Link>

  </div>

  <div className="leader-card">

    <img
      src="/images/principal.jpg"
      alt="Principal"
      className="leader-img"
    />

    <h3>Dr. Durgesh K Sharma</h3>

    <span className="leader-role">
      PRINCIPAL
    </span>

    <p>
      Leading academics and pastoral care with a focus on
      measurable, whole-child growth.
    </p>

    <Link to="/about" className="btn btn-primary">
      Principal's Message
    </Link>

  </div>

</div>
    </section>
  );
}

export default HomeAbout;