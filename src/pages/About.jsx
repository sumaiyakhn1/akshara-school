import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import principalImg from "../assets/images/principal1.png";
import aboutImg from "../assets/images/building.jpg";
import founderImg from "../assets/images/founder.jpg";
import chairpersonImg from "../assets/images/chairPerson.jpg";

function About() {
  return (
    <>
      <Header />

      {/* Hero */}

      <section className="page-banner">

        <div className="container">

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          <h1>About Akshara International School</h1>

          <p>
            Nurturing confident learners through academic excellence,
            strong values and holistic development.
          </p>

        </div>

      </section>

      {/* Welcome */}

      <section className="section">

        <div className="container">

          <div className="about-grid">

            <div className="about-media">

              <div className="frame">
                <img
                  src={aboutImg}
                  alt="Akshara International School"
                />
              </div>

            </div>

            <div className="about-copy">

              <span className="eyebrow">
                Welcome To Akshara
              </span>

              <h2>
                Learning Today,
                Leading Tomorrow
              </h2>

              <p>
                Akshara International School is a CBSE affiliated
                Senior Secondary School located in Pehowa,
                Kurukshetra, Haryana. Established with the vision
                of providing quality education, the school offers
                an environment where every child is encouraged to
                learn, explore and grow with confidence.
              </p>

              <p>
                We believe education is not only about academic
                excellence but also about developing strong
                character, leadership qualities and lifelong
                learning habits. Our classrooms combine modern
                teaching practices with Indian values to nurture
                responsible global citizens.
              </p>

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

            {/* Our Vision & Mission */}

      <section className="section bg-tint">

        <div className="container">

          <div className="section-head">

            <span className="eyebrow">
              Our Philosophy
            </span>

            <h2>
              Vision, Mission & Core Values
            </h2>

            <p>
              At Akshara International School, we believe education is
              the foundation for building responsible citizens and future
              leaders.
            </p>

          </div>

          <div className="why-grid">

            <div className="why-card">

              <div className="icon-wrap">🎯</div>

              <h4>Our Vision</h4>

              <p>
                To create confident, compassionate and responsible global
                citizens by providing world-class education rooted in
                Indian values and culture.
              </p>

            </div>

            <div className="why-card">

              <div className="icon-wrap">🌱</div>

              <h4>Our Mission</h4>

              <p>
                To nurture curiosity, creativity and critical thinking
                through innovative learning experiences that prepare
                students for lifelong success.
              </p>

            </div>

            <div className="why-card">

              <div className="icon-wrap">⭐</div>

              <h4>Our Values</h4>

              <p>
                Integrity, Discipline, Respect, Leadership,
                Excellence and Holistic Development remain at the heart
                of everything we do.
              </p>

            </div>

            <div className="why-card">

              <div className="icon-wrap">🏫</div>

              <h4>Why Akshara?</h4>

              <p>
                Modern infrastructure, experienced faculty,
                student-centred learning and strong parent-school
                partnership make Akshara a trusted choice.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Founder Message */}

<section className="section">

  <div className="container">

    <div className="about-grid">

      <div className="about-media">

        <div className="frame">
          <img
            src={founderImg}
            alt="Founder"
          />
        </div>

      </div>

      <div className="about-copy">

        <span className="eyebrow">
          Founder's Message
        </span>

        <h2>
          A Message From Our Founder
        </h2>

        <p>
          A very warm welcome to Akshara International School,
          Pehowa to experience world class education with a
          difference.
        </p>

        <p>
          Here we aim at an educational philosophy centred on
          praise, encouragement, enthusiasm and affection.
          We pride ourselves on our happy and nurturing
          environment which enables every student to achieve
          the very best.
        </p>

        <p>
          Maa Saraswati has blessed us with the opportunity to
          nurture young learners through innovative ideas,
          quality education and strong values on the sacred
          land of Pehowa.
        </p>

        <div className="quote">
          Yours Sincerely,<br />
          <strong>Mr. Baldev Raj Kahra</strong>
        </div>

      </div>

    </div>

  </div>

</section>
{/* Chairperson Message */}

<section className="section bg-tint">

  <div className="container">

    <div className="about-grid reverse">

      <div className="about-copy">

        <span className="eyebrow">
          Chairperson's Message
        </span>

        <h2>
          Building Bright Futures
        </h2>

        <p>
          Akshara International School combines modern
          infrastructure with innovative teaching methods,
          sports facilities and meaningful learning
          opportunities.
        </p>

        <p>
          We believe education is not only about academic
          excellence but also about spiritual, social and
          personal development. Our aim is to inspire every
          child to realise his or her true potential.
        </p>

        <p>
          We warmly welcome every new student and assure
          parents that our school provides premium standards
          of education right here in their hometown.
        </p>

        <div className="quote">
          Yours Sincerely,<br />
          <strong>Mrs. Poonam Kahra</strong>
        </div>

      </div>

      <div className="about-media">

        <div className="frame">

          <img
            src={chairpersonImg}
            alt="Chairperson"
          />

        </div>

      </div>

    </div>

  </div>

</section>
            {/* Principal Message */}

      <section className="section">

        <div className="container">

          <div className="about-grid">

            <div className="about-media">

              <div className="frame">
                <img
                  src={principalImg}
                  alt="Principal"
                />
              </div>

            </div>

            <div className="about-copy">

              <span className="eyebrow">
                Principal's Message
              </span>

              <h2>
                Inspiring Excellence,
                Every Single Day
              </h2>

              <p>
                At Akshara International School, every child is encouraged
                to discover their potential through quality education,
                discipline, creativity and values. We believe learning
                should inspire curiosity, confidence and compassion.
              </p>

              <p>
                Together with parents and teachers, we strive to create a
                safe, engaging and future-ready learning environment where
                students develop academically as well as personally.
              </p>

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Meet Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>
      {/* School Highlights */}

<section className="section bg-tint">

  <div className="container">

    <div className="section-head">

      <span className="eyebrow">
        School Highlights
      </span>

      <h2>
        Learning Beyond Classrooms
      </h2>

      <p>
        Akshara International School provides a balanced environment where
        academics, innovation, values and co-curricular activities work
        together to nurture every child.
      </p>

    </div>

    <div className="why-grid">

      <div className="why-card">

        <div className="icon-wrap">🏫</div>

        <h4>Modern Infrastructure</h4>

        <p>
          Smart classrooms, science laboratories,
          computer labs, library and activity rooms.
        </p>

      </div>

      <div className="why-card">

        <div className="icon-wrap">👨‍🏫</div>

        <h4>Experienced Faculty</h4>

        <p>
          Dedicated educators focused on conceptual learning,
          discipline and individual attention.
        </p>

      </div>

      <div className="why-card">

        <div className="icon-wrap">⚽</div>

        <h4>Sports & Activities</h4>

        <p>
          Equal emphasis on sports, cultural activities,
          leadership programmes and personality development.
        </p>

      </div>

      <div className="why-card">

        <div className="icon-wrap">💻</div>

        <h4>Technology Enabled Learning</h4>

        <p>
          Digital classrooms and innovative teaching methods
          that prepare students for the future.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Admission CTA */}

      <section className="section">

        <div className="container">

          <div className="cta-band">

            <div>

              <h3>
                Admissions Open for 2026–27
              </h3>

              <p>
                Join Akshara International School and give your child an
                inspiring environment to learn, grow and succeed.
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
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default About;