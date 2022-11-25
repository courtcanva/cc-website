import React from "react";
import BasketballCourt from "./BasketballCourt";
import HeroInfo from "./HeroInfo";




const HeroContainer = () => {
  return (

    <section className="max-w-7xl bg-blue flex flex-col pt-[45px] md:pt-auto margin-auto md:justify-center h-[90vh] md:h-[65vh] md:w-[100vw] relative  mx-auto border-white text-white z-0 ">
      <HeroInfo />
      <BasketballCourt />
    </section>
   
   
  );
};

export default HeroContainer;
