import React, { useState } from "react";
import Fade from "react-reveal/Fade";

//components
import CallToAction from "../components/CallToAction";

const About = () => {
  const directors = [
    {
      quote:
        "It always amazes me how much talent there is in every corner of the globe.",
      name: "Nikita Marks",
      role: "Founder & CEO",
      image: "/assets/avatar-nikita.jpg",
    },
    {
      quote:
        "Distributed teams required unique processes. You need to approach work in a new way.",
      name: "Christian Duncan",
      role: "Co-founder & COO",
      image: "/assets/avatar-christian.jpg",
    },
    {
      quote:
        "Technology is at the forefront of enabling distributed teams. That's where we come in.",
      name: "Cruz Hamer",
      role: "Co-founder & CTO",
      image: "/assets/avatar-cruz.jpg",
    },
    {
      quote:
        "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
      name: "Drake Heaton",
      role: "Business Development Lead",
      image: "/assets/avatar-drake.jpg",
    },
    {
      quote:
        "Unique perspectives shape unique products, which is what you need to survive these days.",
      name: "Griffin Wise",
      role: "Lead Marketing",
      image: "/assets/avatar-griffin.jpg",
    },
    {
      quote:
        "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      name: "Aden Allan",
      role: "Head of Talent",
      image: "/assets/avatar-aden.jpg",
    },
  ];

  const clients = [
    "/assets/logo-the-verge.png",
    "/assets/logo-jakarta-post.png",
    "/assets/logo-the-guardian.png",
    "/assets/logo-tech-radar.png",
    "/assets/logo-gadgets-now.png",
  ];

  const [name, setName] = useState("");

  const toggleInfo = (name) => {
    setName(name);
  };

  return (
    <>
      <div className="wrapper bg-midGreen">
        <img
          src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
          alt="pattern"
          className="absolute -bottom-28 -right-28 md:-right-24 md:bottom-0"
        />

        <div className="grid gap-10 pb-10 xl:grid-cols-2">
          <Fade top>
            <div>
              <h1 className="text-5xl font-bold text-center xl:text-left">
                About
              </h1>
            </div>
          </Fade>

          <div className="flex items-center justify-center xl:flex-col xl:items-start xl:space-y-5">
            <div className="hidden w-10 h-1 xl:block bg-lightCoral" />

            <p className="text-center break-normal xl:text-left md:w-4/5 xl:w-auto">
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </div>
      </div>

      <div className="wrapper bg-djGreen">
        <img
          src="/assets/bg-pattern-about-2-contact-1.svg"
          alt="pattern"
          className="absolute -top-28 -left-24 md:top-0 md:-left-28"
        />

        <img
          src="/assets/bg-pattern-home-4-about-3.svg"
          alt="pattern"
          className="absolute bottom-0 right-0"
        />

        <div className="py-20 space-y-10">
          <h1 className="text-3xl font-bold text-center md:text-4xl xl:text-5xl">
            Meet the directors
          </h1>

          <Fade left cascade>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {directors.map((director, idx) => {
                return (
                  <div className="relative bg-ssGreen" key={idx}>
                    {name === director.name && (
                      <Fade>
                        <div className="absolute z-10 w-full h-full bg-darkGreen">
                          <div className="flex flex-col items-center justify-center h-full p-5 space-y-3">
                            <h1 className="text-xl font-bold text-rapBlue">
                              {director.name}
                            </h1>
                            <p className="text-center">"{director.quote}"</p>

                            <div className="flex justify-center space-x-3">
                              <img
                                src="/assets/icon-twitter.svg"
                                alt="twitter"
                                className="cursor-pointer"
                              />
                              <img
                                src="/assets/icon-linkedin.svg"
                                alt="linkedin"
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </Fade>
                    )}

                    <div
                      key={idx}
                      className="relative flex flex-col items-center justify-center py-10 space-y-2"
                    >
                      <img
                        src={director.image}
                        alt="image"
                        className="border-2 rounded-full w-28 h-28 border-rapBlue"
                      />
                      <h1 className="text-xl font-bold text-rapBlue">
                        {director.name}
                      </h1>
                      <p className="">{director.role}</p>

                      <button
                        className={`absolute flex items-center justify-center w-12 h-12 rounded-full -bottom-6 z-20 ${
                          name === director.name
                            ? "bg-rapBlue"
                            : "bg-lightCoral"
                        } ${
                          name === director.name
                            ? "hover:bg-lightCoral"
                            : "hover:bg-rapBlue"
                        }  focus:outline-none`}
                        onClick={() => toggleInfo(director.name)}
                      >
                        <img
                          src="/assets/icon-cross.svg"
                          alt="icon"
                          className={`transform ${
                            name === director.name && "rotate-45"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>

      <div className="wrapper bg-ssGreen">
        <img
          src="/assets/bg-pattern-about-4.svg"
          alt="pattern"
          className="absolute -left-28 -top-24 xl:top-0 xl:left-0 "
        />

        <div className="flex flex-col items-center py-10 space-y-10">
          <h1 className="text-3xl font-bold text-center md:text-4xl xl:text-5xl">
            Some of our clients
          </h1>

          <Fade left cascade>
            <div className="grid gap-10 md:grid-cols-5">
              {clients.map((client, idx) => {
                return (
                  <div key={idx}>
                    <img src={client} alt="clients" className="w-32" />
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>

      <CallToAction />
    </>
  );
};

export default About;
