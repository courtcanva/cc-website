import React from "react";
import HeroInformation from "./HeroInformation";
import ThreeDimensionalCourt from "./ThreeDimensionalCourt";

const Hero = () => {
  return (
    <section className="max-w-7xl  bg-blue flex flex-col margin-auto md:py-[106px] lg:py-[143px]  md:w-[100vw] relative  mx-auto border-white text-white overflow-hidden z-component">
      <HeroInformation />
      <ThreeDimensionalCourt />
    </section>
  );
};

export default Hero;
