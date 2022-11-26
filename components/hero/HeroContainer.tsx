import React from "react";
import BasketballCourt from "./BasketballCourt";
import HeroInfo from "./HeroInfo";




const HeroContainer = () => {
  return (

    <section className="max-w-7xl  bg-blue flex flex-col pt-[45px] margin-auto md:py-[106px] lg:py-[143px]  md:w-[100vw] relative  mx-auto border-white text-white overflow-hidden">
      <HeroInfo />
      <BasketballCourt />

    </section>
   
   
  );
};

export default HeroContainer;
