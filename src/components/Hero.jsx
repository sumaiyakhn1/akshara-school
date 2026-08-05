import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import slider1 from "../assets/images/building.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider4 from "../assets/images/slider4.jpg";

const slides = [
  {
    image: slider1,
    eyebrow: "Est. in Pehowa — A Family For Learning",
    title1: "Where Every Child",
    title2: "Begins",
    highlight: "a Legacy",
    desc:
      "A CBSE-affiliated campus built on warmth, discipline and academic excellence where every learner grows with confidence.",
    btn1: "Apply Now",
    btn2: "Campus Visit",
  },

  {
    image: slider2,
    eyebrow: "Modern Infrastructure",
    title1: "A Campus Built",
    title2: "for",
    highlight: "Curiosity",
    desc:
      "Smart classrooms, science labs, computer labs and green learning spaces designed for every child.",
    btn1: "Explore Campus",
    btn2: "Gallery",
  },

  {
    image: slider3,
    eyebrow: "Admissions Open",
    title1: "Admissions",
    title2: "Now",
    highlight: "Open",
    desc:
      "Give your child the opportunity to learn in an inspiring and nurturing environment.",
    btn1: "Apply Now",
    btn2: "Contact Us",
  },

  {
    image: slider4,
    eyebrow: "Beyond The Classroom",
    title1: "Sport, Spirit",
    title2: "&",
    highlight: "Achievement",
    desc:
      "Developing leadership, teamwork and confidence through sports, cultural activities and competitions.",
    btn1: "Achievements",
    btn2: "Campus Visit",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">

      <div className="container">

        <div className="hero-wrapper">

          {/* LEFT */}

          <div className="hero-left">

            <span className="hero-eyebrow">
              {slides[current].eyebrow}
            </span>

            <h1 className="hero-title">

              {slides[current].title1}

              <br />

              {slides[current].title2}

              <span>
                {" "}
                {slides[current].highlight}
              </span>

            </h1>

            <p className="hero-desc">

              {slides[current].desc}

            </p>

            <div className="hero-cta">

              <Link
                to="/admissions"
                className="btn btn-primary"
              >
                {slides[current].btn1}
              </Link>

              <Link
                to="/contact"
                className="btn btn-ghost"
              >
                {slides[current].btn2}
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <div className="hero-image-card">

              <img
                src={slides[current].image}
                alt="Akshara International School"
                className="hero-image"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Dots */}

      <div className="hero-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

      {/* Arrows */}

      <div className="hero-arrows">

        <button
          onClick={() =>
            setCurrent(
              (current - 1 + slides.length) %
                slides.length
            )
          }
        >
          ❮
        </button>

        <button
          onClick={() =>
            setCurrent(
              (current + 1) %
                slides.length
            )
          }
        >
          ❯
        </button>

      </div>

    </section>
  );
}

export default Hero;