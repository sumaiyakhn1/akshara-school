import Header from "../components/Header";
import Footer from "../components/Footer";

import img1 from "../assets/images/gallery/1.png";
import img2 from "../assets/images/gallery/2.png";
import img3 from "../assets/images/gallery/3.png";
import img4 from "../assets/images/gallery/4.png";

const images = [
  img1,
  img2,
  img3,
  img4,
];

function Gallery() {
  return (
    <>
      <Header />

      {/* Banner */}

      <section className="page-banner">
        <div className="container">

          <div className="breadcrumb">
            Home / Gallery
          </div>

          <h1>School Gallery</h1>

          <p>
            Explore memorable moments, campus life, academics,
            sports and celebrations at Akshara International School.
          </p>

        </div>
      </section>

      {/* Gallery */}

      <section className="section">

        <div className="container">

          <div className="section-head">

            <span className="eyebrow">
              Gallery
            </span>

            <h2>
              Campus Life Through Pictures
            </h2>

            <p>
              Every photograph reflects learning,
              creativity and unforgettable memories.
            </p>

          </div>

          <div className="masonry">

            {images.map((img, index) => (

              <div
                className="g-item"
                key={index}
              >

                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                />

                <div className="g-overlay">
                  🔍
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Gallery;