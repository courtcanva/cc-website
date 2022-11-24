import React from "react";
import Basketball from "./Basketball";
import HeroInfo from "./HeroInfo";

const HeroContainer = () => {
  return (
    <section className="max-w-7xl bg-template flex flex-col md:flex-row items-center justify-between md:space-x-2 lg:space-x-8 h-[85vh] md:h-[65vh] relative mx-auto">
      <HeroInfo />
      <Basketball />
    </section>
  );
};

export default HeroContainer;
