// const stats = [
//   {
//     number: "1200",
//     suffix: "+",
//     label: "Students",
//   },
//   {
//     number: "80",
//     suffix: "+",
//     label: "Faculty & Staff",
//   },
//   {
//     number: "15",
//     suffix: "+",
//     label: "Years of Excellence",
//   },
//   {
//     number: "5",
//     suffix: " Acres",
//     label: "Campus Area",
//   },
//   {
//     number: "98",
//     suffix: "%",
//     label: "Board Results",
//   },
// ];

function Stats() {
  return (
    <section className="stats-strip">
      <div className="stats-card">

        <div className="stat">
          <div className="num">
            1200<span className="suffix">+</span>
          </div>
          <div className="label">Students</div>
        </div>

        <div className="stat">
          <div className="num">
            80<span className="suffix">+</span>
          </div>
          <div className="label">Faculty & Staff</div>
        </div>

        <div className="stat">
          <div className="num">
            15<span className="suffix">+</span>
          </div>
          <div className="label">Years of Excellence</div>
        </div>

        <div className="stat">
          <div className="num">
            5<span className="suffix"> Acres</span>
          </div>
          <div className="label">Campus Area</div>
        </div>

        <div className="stat">
          <div className="num">
            98<span className="suffix">%</span>
          </div>
          <div className="label">Board Results</div>
        </div>

      </div>
    </section>
  );
}

export default Stats;