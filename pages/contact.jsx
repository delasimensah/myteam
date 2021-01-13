import React from "react";
import Fade from "react-reveal/Fade";

//components
import Input from "../components/Input";

const Contact = () => {
  const benefits = [
    {
      image: "/assets/icon-person.svg",
      text: `The quality of our talent network.`,
    },
    {
      image: "/assets/icon-cog.svg",
      text: `Usage & implementation of our software.`,
    },
    {
      image: "/assets/icon-chart.svg",
      text: `How we help drive innovation.`,
    },
  ];

  return (
    <div className="bg-midGreen wrapper">
      <img
        src="/assets/bg-pattern-about-2-contact-1.svg"
        alt="pattern"
        className="absolute top-0 left-0 hidden md:-left-24 md:block"
      />

      <img
        src="/assets/bg-pattern-contact-2.svg"
        alt="pattern"
        className="absolute -bottom-24 -right-24 md:bottom-0 md:-right-24"
      />

      <div className="grid gap-10 pb-20 xl:grid-cols-2">
        <div className="space-y-5 xl:space-y-8 md:px-20 xl:px-0">
          <h1 className="text-4xl font-bold text-center md:text-5xl xl:text-left xl:text-6xl">
            Contact
          </h1>

          <h2 className="text-2xl font-bold text-center xl:text-left xl:text-4xl text-lightCoral">
            Ask us about
          </h2>

          <Fade left cascade>
            <div className="grid gap-5">
              {benefits.map((benefit, idx) => {
                return (
                  <div key={idx} className="flex items-center space-x-5">
                    <img src={benefit.image} alt="icon" className="w-20 h-20" />

                    <p className="font-semibold text-left text-gray-300 xl:text-center lg:text-sm">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>

        <div className="space-y-7 md:px-20 xl:px-0">
          <form className="relative z-10 space-y-7">
            <Input type="text" placeholder="Name" />

            <Input type="email" placeholder="Email Address" />

            <Input type="text" placeholder="Company Name" />

            <Input type="text" placeholder="Title" />

            <Input type="textarea" placeholder="" />
          </form>

          <button className="px-5 py-2 font-bold bg-white rounded-full text-darkGreen focus:outline-none hover:bg-rapBlue">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
