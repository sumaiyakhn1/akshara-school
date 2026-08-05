import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../assets/images/building.jpg"; 
import slider2 from "../assets/images/slider2.jpg"; 
import slider3 from "../assets/images/slider3.jpg"; 
import slider4 from "../assets/images/slider4.jpg"; 

const slides = [
  {
    image:
      slider1,
    eyebrow: "Est. in Pehowa — A Family For Learning",
    title1: "Where Every Child",
    title2: "Begins",
    highlight: "a Legacy",
    desc:
      "A CBSE-affiliated campus built on warmth, discipline and academic depth.",
    btn1: "Apply Now",
    btn2: "Book Campus Visit",
  },
  {
    image: slider2,
    eyebrow: "Our Campus",
    title1: "A Campus Built",
    title2: "for",
    highlight: "Curiosity",
    desc:
      "Bright classrooms, labs and green spaces designed for learning.",
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
      "Join Akshara International School for the upcoming academic session.",
    btn1: "Apply Now",
    btn2: "Contact Us",
  },
  {
  image:
    slider4,
  eyebrow: "Beyond the Classroom",
  title1: "Sport, Spirit",
  title2: "and",
  highlight: "Achievement",
  desc:
    "From Olympiad medals to inter-school championships — our students carry the school crest with pride.",
  btn1: "See Achievements",
  btn2: "Book Campus Visit",
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

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${current === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div
            className="kenburns"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>

          <div className="hero-content">

            <span className="hero-eyebrow">
              {slide.eyebrow}
            </span>

            <h1 className="hero-title">
              {slide.title1}
              <br />
              {slide.title2} <span>{slide.highlight}</span>
            </h1>

            <p className="hero-desc">
              {slide.desc}
            </p>

            <div className="hero-cta">
              <Link to="/" className="btn btn-primary">
  {slide.btn1}
</Link>

<Link to="/contact" className="btn btn-ghost">
  {slide.btn2}
</Link>
            </div>

          </div>
        </div>
      ))}

      <div className="hero-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          ></button>
        ))}

      </div>
      <div className="hero-arrows">
  <button
    onClick={() =>
      setCurrent((current - 1 + slides.length) % slides.length)
    }
  >
    ❮
  </button>

  <button
    onClick={() =>
      setCurrent((current + 1) % slides.length)
    }
  >
    ❯
  </button>
</div>
<div className="scroll-cue">
  <span>Scroll</span>
  <span className="line"></span>
</div>

    </section>
    
  );
}

export default Hero;