import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo light.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0642] text-white py-10 mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 flex flex-col items-center text-center">
          <img src={logo} alt="Logo" className="mb-4" />
          <p>123 Main Street Anytown, USA</p>
          <p>Postal Code: 12345</p>
          <p className="mt-4">Support: support@oyolloo.com</p>
          <p>(Available: 10:00am to 07:00pm)</p>
        </div>
        <div>
          <ul>
            <li className="mb-2">Home</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Success Page</li>
            <li className="mb-2">Terms And Condition</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-2">Services</li>
            <li className="mb-2">Scheduling</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Patient Portal</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <p className="mt-auto">@Docplus 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
