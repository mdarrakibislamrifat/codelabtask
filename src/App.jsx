import "./App.css";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Empowering from "./Empowering/Empowering";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Testimonial from "./Testimonial/Testimonial";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Banner />
      <Empowering />
      <Testimonial />
      <FAQ />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
