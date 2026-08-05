import { Link } from "react-router-dom";
import founderImg from "../assets/images/founder.jpg";
import chairpersonImg from "../assets/images/chairPerson.jpg";
import principalImg from "../assets/images/principal1.png";
import aboutImg from "../assets/images/building.jpg";

function HomeAbout() {
  return (
    <section className="section section-tight" id="about">
      <div className="container">

        <div className="about-grid">

          <div className="about-media">

            <div className="frame">
              <img
                src={aboutImg}
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
              Akshara International School a verdant landscape designed aesthetically is the​ perfect blend of style, aesthetics and comfort. The areas have been perfectly​ planned to encompass educational, sports and recreational facilities. Mr. Baldev​ Raj Kahra made a humble attempt of planting a seed in the soil in Pehowa.​ Within a very short span of time, it has grown in stature offering its shade to​ playful children and help nestle many, from far and wide. The school has shaped​ into a vibrant one with all modern amenities and educators collaborating​ actively to actualize a progressive curriculum.
            </p>

            <p>
              The school aims to create pupils who are successful life-long learners, confident​ individuals and responsible citizens. This level of success can only be achieved​ when a strong partnership between students, staff, parents and the community​ is maintained. With excellent sports facilities, air-conditioned digital classrooms​ activity areas, language lab, state-of-the-art computer and science labs, the ​ school is enthusiasm personified.
            </p>

            <div className="quote">
              "Every child deserves a safe, inspiring and joyful
              place to learn."
            </div>

            <div className="about-signoff">

              <img
                src={principalImg}
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
      src={founderImg}
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
      src={chairpersonImg}
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
      src={principalImg}
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