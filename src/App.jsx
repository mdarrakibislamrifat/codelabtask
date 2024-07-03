import "./App.css";
import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
