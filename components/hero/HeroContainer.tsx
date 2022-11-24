import React from "react";
import BasketballCourt from "./BasketballCourt";
import HeroInfo from "./HeroInfo";



const HeroContainer = () => {
  return (
    <section className="max-w-7xl bg-blue flex flex-col md:flex-row items-center justify-between h-[90vh] md:h-[65vh] relative gap-7 md:gap-0 lg:gap-[99px] mx-auto">
      <HeroInfo />
      <BasketballCourt />
    </section>
  );
};

export default HeroContainer;
