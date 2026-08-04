import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HomeAbout from "../components/HomeAbout";
import WhyChooseUs from "../components/WhyChooseUs";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import LatestNews from "../components/LatestNews";
import VirtualTour from "../components/VirtualTour";
import AdmissionCTA from "../components/AdmissionCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      {/* <AboutSection /> */}
      <HomeAbout />
      <WhyChooseUs />
      <Achievements />
      <Testimonials />
      <LatestNews />
      <VirtualTour />
      <AdmissionCTA />
      <Footer />
    </>
  );
}

export default Home;