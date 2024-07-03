import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" flex items-center justify-center min-h-full">
      <div className="w-full max-w-6xl  bg-white ">
        <h1 className="text-left p-4 w-16 border-2 border-black rounded-3xl">
          FAQ
        </h1>
        <h1 className="text-3xl font-bold text-left mb-6">
          Frequently Asked Questions
        </h1>
        <div className="accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                className={`accordion-button w-full text-left py-4 px-4 font-semibold focus:outline-none flex justify-between items-center ${
                  activeIndex === index ? "bg-yellow-100" : "bg-yellow-50"
                }`}
                aria-expanded={activeIndex === index}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "block" : "hidden"
                } pb-4 px-4 bg-white`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What Are Your Office Hours?",
    answer:
      "Our Office Hours Vary By Location, But Typically We Are Open Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May Offer Extended Hours Or Weekend Appointments. Please Contact Your Nearest Clinic For Specific Hours.",
  },
  {
    question: "How Can I Schedule An Appointment?",
    answer:
      "You can schedule an appointment by calling our office or using our online appointment booking system.",
  },
  {
    question: "Do You Accept Insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please contact our office to verify your insurance.",
  },
  {
    question: "What Should I Bring To My Appointment?",
    answer:
      "Please bring your insurance card, a photo ID, and any relevant medical records or referral forms.",
  },
  {
    question: "Do You Offer Telemedicine Appointments?",
    answer:
      "Yes, we offer telemedicine appointments for your convenience. Please contact our office to schedule.",
  },
];

export default FAQ;
