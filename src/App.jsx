import "./App.css";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Empowering from "./Empowering/Empowering";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Banner />
      <Empowering />
      <FAQ />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
