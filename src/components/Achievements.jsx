function Achievements() {
  return (
    <section className="section bg-navy" id="achievements">
      <div className="container">

        <div className="achieve-wrap">

          <div className="reveal-left">

            <span
              className="eyebrow"
              style={{ color: "var(--green-400)" }}
            >
              Achievements
            </span>

            <h2>
              Recognised for results, not just effort
            </h2>

            <p style={{ marginTop: "16px" }}>
              A track record built across academics,
              Olympiads and the sports field.
            </p>

            <div
              className="achieve-stats"
              style={{ marginTop: "36px" }}
            >

              <div className="a-stat">
                <div className="num">98%</div>
                <div className="label">
                  Class X & XII Results
                </div>
              </div>

              <div className="a-stat">
                <div className="num">40+</div>
                <div className="label">
                  Olympiad Medals
                </div>
              </div>

              <div className="a-stat">
                <div className="num">25+</div>
                <div className="label">
                  Inter-School Titles
                </div>
              </div>

              <div className="a-stat">
                <div className="num">100%</div>
                <div className="label">
                  Parent Satisfaction
                </div>
              </div>

            </div>

          </div>

          <div className="achieve-list reveal-right">
            <div className="achieve-item">

  <div className="ic">
    🏆
  </div>

  <div>
    <h4>Consistent Academic Excellence</h4>

    <p>
      Outstanding board examination results with students
      consistently achieving distinction across subjects.
    </p>
  </div>

</div>

<div className="achieve-item">

  <div className="ic">
    🧪
  </div>

  <div>
    <h4>Olympiad & Competition Success</h4>

    <p>
      Students regularly participate and excel in Science,
      Mathematics and English Olympiads at various levels.
    </p>
  </div>

</div>

<div className="achieve-item">

  <div className="ic">
    ⚽
  </div>

  <div>
    <h4>Sports & Co-Curricular Achievements</h4>

    <p>
      Winners in athletics, cultural activities and inter-school
      competitions, encouraging holistic development.
    </p>
  </div>

</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Achievements;