import React from "react";
import Fade from "react-reveal/Fade";

//components
import CallToAction from "../components/CallToAction";

const Home = () => {
  const benefits = [
    {
      image: "/assets/icon-person.svg",
      title: "Experienced Individuals",
      text: ` Our network is made up of highly experienced professionals who are 
      passionate about what they do.`,
    },
    {
      image: "/assets/icon-cog.svg",
      title: " Easy to Implement",
      text: `Our processes have been refined over years of implementation meaning 
      our teams always deliver.`,
    },
    {
      image: "/assets/icon-chart.svg",
      title: "Enhanced Productivity",
      text: `Our customized platform with in-built analytics helps you manage your 
      distributed teams.`,
    },
  ];

  const stories = [
    {
      quote: `The team perfectly fit the specialized skill set required. They focused 
      on the most essential features helping us launch the platform eight months 
      faster than planned.`,
      name: "Kady Baker",
      role: "Product Manager at Bookmark",
      image: "/assets/avatar-kady.jpg",
    },
    {
      quote: `We needed to automate our entire onboarding process. The team came in and 
      built out the whole journey. Since going live, user retention has gone 
      through the roof`,
      name: "Aiysha Reese",
      role: "Founder of Manage",
      image: "/assets/avatar-aiysha.jpg",
    },
    {
      quote: `Amazing. Our team helped us build an app that delivered a new experience for 
      hiring a physio. The launch was an instant success with 100k downloads in the 
      first month.`,
      name: "Arthur Clarke",
      role: "Co-founder of MyPhysio",
      image: "/assets/avatar-arthur.jpg",
    },
  ];

  return (
    <>
      <div className="bg-midGreen wrapper">
        <img
          src="/assets/bg-pattern-home-1.svg"
          alt=""
          className="absolute top-0 hidden transform scale-90 lg:block -left-28"
        />
        <img
          src="/assets/bg-pattern-home-2.svg"
          alt=""
          className="absolute transform scale-90 -bottom-1 md:right-52 lg:right-32 xl:right-40"
        />

        <div className="grid gap-5 lg:mb-36 md:gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Fade distance="40px" left>
              <h1 className="w-2/3 md:w-1/2 lg:w-auto heading-1 lg:text-left lg:text-6xl xl:text-8xl">
                Find the best <span className="text-lightCoral">talent</span>
              </h1>
            </Fade>
          </div>

          <div className="flex flex-col items-center justify-center pb-40 lg:pb-0 lg:items-start lg:space-y-12 xl:px-16">
            <div className="hidden w-10 h-1 lg:block bg-rapBlue" />

            <p className="text-center md:w-4/6 lg:w-auto lg:text-left xl:font-semibold">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-ssGreen wrapper">
        <img
          src="/assets/bg-pattern-home-3.svg"
          alt="pattern"
          className="absolute transform scale-90 -right-24 lg:bottom-0"
        />

        <div className="grid space-y-10 lg:space-y-0 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="w-10 h-1 bg-lightCoral" />

            <h1 className="w-4/5 text-left heading-1 md:text-4xl lg:text-3xl xl:text-5xl">
              Build & manage distributed teams like no one else.
            </h1>
          </div>

          <Fade distance="40px" left cascade>
            <div className="grid gap-10">
              {benefits.map((benefit, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center space-y-5 md:space-x-5 md:flex-row"
                  >
                    <img src={benefit.image} alt="icon" />

                    <div className="flex flex-col items-center justify-center space-y-5 md:items-start">
                      <h3 className="font-semibold md:text-left text-lightCoral">
                        {benefit.title}
                      </h3>

                      <p className="font-semibold text-center text-gray-300 md:text-left lg:text-sm">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>

      <div className="bg-djGreen wrapper">
        <img
          src="/assets/bg-pattern-home-4-about-3.svg"
          alt="pattern"
          className="absolute top-0 left-0"
        />

        <img
          src="/assets/bg-pattern-home-5.svg"
          alt="pattern"
          className="absolute bottom-0 right-0"
        />
        <div className="flex flex-col items-center justify-center my-24 space-y-10">
          <h1 className="md:w-76% heading-1 text-33 md:text-4xl xl:text-5xl xl:w-88%">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-rapBlue">success stories.</span>
          </h1>

          <Fade distance="10px" cascade top>
            <div className="grid gap-16 xl:grid-cols-3">
              {stories.map((story, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    <div className="relative pt-10">
                      <img
                        src="/assets/icon-quotes.svg"
                        alt="quotes"
                        className="absolute top-0 left-32 md:left-72 xl:left-32"
                      />

                      <p className="relative z-10 font-bold text-center text-gray-300">
                        "{story.quote}"
                      </p>
                    </div>

                    <h3 className="font-bold text-center md:text-lg text-rapBlue">
                      {story.name}
                    </h3>

                    <p className="text-center">{story.role}</p>

                    <img
                      src={story.image}
                      alt="avatar"
                      className="w-20 h-20 border-2 rounded-full border-rapBlue"
                    />
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

export default Home;
