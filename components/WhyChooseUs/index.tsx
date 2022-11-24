import Link from "next/link";
import React from "react";
import CardContainer from "./CardContainer";

const WhyChooseUs = () => {
  return (
    <section className="px-8 py-12 relative bg-backgroundColor  max-w-7xl mx-auto">
      <h2 className="text-h2">Why Choose Us</h2>
      <p className="text-[#ffffffd8] tracking-[.01em]">
        The products we provide are different from others
      </p>
      <div className="flex flex-col items-center">
        <CardContainer />
        <Link
          href="design.courcanva.com"
          className="rounded-md w-full md:w-40 text-center py-1.5 mt-4 md:mt-8 bg-btn hover:bg-btnHover text-[#F9F9F9] tracking-[.01em]"
        >
          Start free trial
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
