import Link from "next/link";
import React from "react";
import { designUrl } from "../constants/environments";

const HeroInformation = () => {
  return (
    <section className=" relative flex flex-col w-full md:w-[328px]  lg:w-[450px]  items-center md:items-start  md:ml-8 lg:ml-[48px]  pt-[45px] md:pt-0  text-center md:text-left">
      <h1 className="text-[2.5rem] font-semibold leading-tight leading-1.2 tracking-[.03em] px-[31px] md:px-0">
        Build your dream court width NO effort
      </h1>
      <h4 className="text-xl md:text-xl font-light mt-1 leading-[1.3] tracking-[.02em] w-[328px lg:w-[450px] px-[31px] md:px-0">
        Start to design your court with CourtCanva
      </h4>
      <Link
        href={designUrl}
        className="rounded-md  w-[366px]  py-1.5 mt-4 md:mt-6 bg-btn  hover:bg-btnHover mb-[30px] md:mx-0 text-btnText tracking-[.01em] text-center md:w-[148px]"
      >
        Design Now!
      </Link>
    </section>
  );
};

export default HeroInformation;
