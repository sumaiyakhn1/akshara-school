function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900",
    },
    {
      title: "Computer Lab",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900",
    },
    {
      title: "Science Lab",
      image:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=900",
    },
    {
      title: "Library",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900",
    },
    {
      title: "Sports",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=900",
    },
    {
      title: "School Transport",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=900",
    },
  ];

  return (
    <section className="section">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">Facilities</span>

          <h2>Our Campus Facilities</h2>

          <p>
            We provide world-class infrastructure for quality learning.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {facilities.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  padding: "18px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;