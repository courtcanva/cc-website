import Link from "next/link";
import React from "react";

const HeroInfo = () => {
  return (
    <section className="flex flex-col  w-[328px] mx-8 lg:w-[450px]">
      <h1 className="text-[40px] md:text-5xl font-semibold leading-tight">
        Build your dream court width No effort
      </h1>
      <h4 className="text-xl md:text-xl font-light leading-snug mt-1">
        Start to design your court with CourtCanva
      </h4>
      <Link
        href="/design"
        className="block rounded-md w-[100%] md:w-40  py-1.5 px-6 mt-6 bg-btn text-center hover:bg-btnHover "
      >
        Design Now!
      </Link>
    </section>
  );
};

export default HeroInfo;
