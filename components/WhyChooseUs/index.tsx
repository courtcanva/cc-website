import Link from "next/link";
import React from "react";
import CardContainer from "./CardContainer";

const WhyChooseUs = () => {
  return (
    <section className="md:px-8 md:py-12 lg:p-12 w-[100vw] relative bg-backgroundColor  max-w-7xl mx-auto text-white overflow-hidden">
      <h2 className="text-h2">Why Choose Us</h2>
      <p className="text-white opacity-85 tracking-[.01em]">
      It is our mission to make our dream court come true
      </p>
      <div className="flex flex-col items-center">
        <CardContainer />
        <Link
          href="design.courcanva.com"
          className="rounded-md w-full md:w-40 text-center py-1.5 mt-4 md:mt-8 bg-btn hover:bg-btnHover text-btnTexxt tracking-[.01em]"
        >
          Start free trial
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
