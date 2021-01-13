import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const CallToAction = () => {
  return (
    <div className="bg-lightCoral wrapper text-darkGreen">
      <img
        src="/assets/bg-pattern-home-6-about-5.svg"
        alt="pattern"
        className="absolute bottom-0 left-0 md:-left-10"
      />

      <div className="flex flex-col items-center justify-center my-16 xl:my-5 xl:justify-around md:flex-row space-y-7 md:space-y-0 md:space-x-20">
        <Fade bottom>
          <h1 className="heading-1 md:text-4xl xl:text-5xl">
            Ready to get started?
          </h1>
        </Fade>

        <Link href="/contact">
          <a className="btn border-darkGreen hover:text-white hover:bg-darkGreen">
            contact us
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
