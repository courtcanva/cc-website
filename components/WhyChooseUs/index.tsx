import React from "react";
import { designUrl } from "../../constants";
import CardContainer from "./CardContainer";

const WhyChooseUs = () => {
  return (
    <section className=" px-3 md:px-8 py-12 lg:px-12 w-full relative bg-backgroundColor  max-w-7xl mx-auto text-white overflow-hidden">
      <h2 className="text-h2 ">Why Choose Us</h2>
      <p className="text-white opacity-85 tracking-[.01em] w-[95%]">
        It is our mission to make our dream court come true
      </p>
      <div className="flex flex-col items-center">
        <CardContainer />
        <a
          href={designUrl}
          className="rounded-md w-full md:w-40 text-center py-1.5 mt-4 md:mt-8 bg-btn hover:bg-btnHover text-btnText tracking-[.01em]"
        >
          Start free trial
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;
