import React from "react";
import HeroInformation from "./HeroInformation";
import ThreeDimensionalCourt from "./ThreeDimensionalCourt";

const Hero = () => {
  return (
    <div className="relative z-component">
      <section className="bg-blue flex flex-col margin-auto md:py-[106px] lg:py-[143px]  md:w-[100vw] relative  mx-auto border-white text-white overflow-hidden">
        <HeroInformation />
        <ThreeDimensionalCourt />
      </section>
    </div>
  );
};

export default Hero;
