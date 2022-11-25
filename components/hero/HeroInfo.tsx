import Link from "next/link";
import React from "react";

const HeroInfo = () => {
  return (
    <section className=" relative flex flex-col w-full md:w-[[328px]] items-center  md:items-start lg:w-[450px] md:ml-8 lg:ml-[80px]  pt-[45px] md:pt-0  text-center md:text-left">
      <h1 className="text-[40px] font-semibold leading-tight leading-1.2 tracking-[.03em] w-[328px]">
        Build your dream court width No effort
      </h1>
      <h4 className="text-xl md:text-xl font-light mt-1 leading-[1.3] tracking-[.02em] w-[328px lg:w-[450px]">
        Start to design your court with CourtCanva
      </h4>
      <Link
        href="design.courcanva.com"
        className="rounded-md  w-[366px] md:w-40  py-1.5 mt-4 md:mt-6 bg-btn  hover:bg-btnHover  md:mx-0 text-btnText tracking-[.01em] text-center"
      >
        Design Now!
      </Link>
    </section>
  );
};

export default HeroInfo;
