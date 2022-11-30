import React from "react";
import HeroInformation from "./HeroInformation";
import ThreeDimensionalCourt from "./ThreeDimensionalCourt";

const Hero = () => {
  return (
    <section className="relative z-component">
      <div className="bg-blue flex flex-col margin-auto md:py-[106px] lg:py-[143px] relative  mx-auto border-white text-white overflow-hidden">
        <HeroInformation />
        <ThreeDimensionalCourt />
      </div>
    </section>
  );
};

export default Hero;
