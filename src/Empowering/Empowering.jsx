import img1 from "../assets/Rectangle 27.png";
import img2 from "../assets/Rectangle 27-1.png";
import img3 from "../assets/Rectangle 27-2.png";
import arrow1 from "../assets/Arrow1.png";

const Empowering = () => {
  return (
    <section
      className="items-center max-w-6xl mt-4 mx-auto p-6 bg-[#FFFFF5]
"
    >
      <h1 className="text-left p-4 w-24 border-2 border-black rounded-3xl">
        SERVICE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div className="text-center mb-10 h-[394px] w-[524px]">
          <h1 className="text-3xl font-bold mb-4">
            Empowering Health, <br /> Enriching Lives
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We are committed to providing high-quality, <br /> compassionate
            care to every patient we serve. <br /> Whatever your healthcare
            needs may be, you can trust <br /> us to be your partner in health
            and wellness.
          </p>
          <a className="btn bg-[#FFC637]">
            Appointment <img src={arrow1} alt="" />
          </a>
        </div>

        {/* 2nd grid */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-[394px] w-[524px]">
          <img
            src={img3}
            alt="Consultancy your health"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-[#020043] bg-opacity-50 px-4 py-4 flex flex-col justify-end h-[144px] w-[321px]">
            <h2 className="text-xl font-bold text-white mb-2">
              Consultancy your health
            </h2>
            <div className="flex items-center text-white mb-4">
              <p className="mr-2">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <img
                src={arrow1}
                alt="Arrow"
                className="h-6 w-6 bg-[#FFC637] p-2"
              />
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-[394px] w-[524px]">
          <img
            src={img2}
            alt="Consultancy your health"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-[#020043] bg-opacity-50 px-4 py-4 flex flex-col justify-end h-[144px] w-[321px]">
            <h2 className="text-xl font-bold text-white mb-2">
              Consultancy your health
            </h2>
            <div className="flex items-center text-white mb-4">
              <p className="mr-2">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <img
                src={arrow1}
                alt="Arrow"
                className="h-6 w-6 bg-[#FFC637] p-2"
              />
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-[394px] w-[524px]">
          <img
            src={img1}
            alt="Consultancy your health"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-[#020043] bg-opacity-50 px-4 py-4 flex flex-col justify-end h-[144px] w-[321px]">
            <h2 className="text-xl font-bold text-white mb-2">
              Consultancy your health
            </h2>
            <div className="flex items-center text-white mb-4">
              <p className="mr-2">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <img
                src={arrow1}
                alt="Arrow"
                className="h-6 w-6 bg-[#FFC637] p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowering;
