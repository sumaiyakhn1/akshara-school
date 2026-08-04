import { useState } from "react";

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    name: "Ritu Sharma",
    role: "Parent, Class 4",
    msg: "That kind of attention is rare to find these days, and it shows in her confidence.",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    name: "Vikram Chauhan",
    role: "Parent, Class 8",
    msg: "From the labs to the sports ground, the campus genuinely feels built for children — not just for show during admission season.",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    name: "Ananya Kahra",
    role: "Alumna, Class of 2023",
    msg: "Akshara gave me more than marks — it gave me the confidence to speak up, compete at the state Olympiad, and still feel at home every day.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setCurrent((current + 1) % testimonials.length);

  return (
    <section className="section">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>What Parents Say</h2>
        </div>

        <div className="test-slider">

          <div className="test-slide">

            <div className="test-card">

              <div className="quote-mark">“</div>

              <div className="stars">★★★★★</div>

              <p className="msg">
                {testimonials[current].msg}
              </p>

              <div className="test-person">

                <img
                  src={testimonials[current].img}
                  alt={testimonials[current].name}
                />

                <div>
                  <strong>{testimonials[current].name}</strong>
                  <span>{testimonials[current].role}</span>
                </div>

              </div>

            </div>

          </div>

          <div className="test-arrows">

            <button
              className="t-prev"
              onClick={prev}
            >
              ❮
            </button>

            <button
              className="t-next"
              onClick={next}
            >
              ❯
            </button>

          </div>

          <div className="test-dots">

            {testimonials.map((_, index) => (
              <button
                key={index}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;