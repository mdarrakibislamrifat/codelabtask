import img1 from "../assets/Rectangle 32.png";
import arrow1 from "../assets/Arrow1.png";
import img2 from "../assets/logo light.png";
const Appointment = () => {
  return (
    <div className="relative h-[477px]">
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0642] to-[#1d166c] opacity-75"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 text-white">
        <h1 className="text-4xl font-bold text-left mb-4">
          Get Your <br /> First Appointment <br />
          at 50% Off!
        </h1>
        <div className="space-x-4 flex">
          <button className="flex items-center bg-[#FFC637] text-black font-bold py-2 px-4 rounded">
            Appointment{" "}
            <img src={arrow1} alt="Arrow" className="ml-2 w-4 h-4" />
          </button>
          <button className="flex items-center border-2 text-white font-bold py-2 px-4 rounded">
            Learn More <img src={arrow1} alt="Arrow" className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      <img
        src={img2}
        alt="Logo"
        className="absolute top-4 right-4 mt-4 mr-4 w-20 h-10"
      />
    </div>
  );
};

export default Appointment;
