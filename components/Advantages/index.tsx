import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Advantages = () => {
  const { ref, inView } = useInView();
  const advantages = ["Online tools", "Customise", "High quality", "Years guarantee"];

  return (
    <section
      className="max-w-7xl mx-auto pt-10 pb-20 px-3 md:px-6 lg:px-12 g-4 md:g-8 bg-purpleBlue text-white font-light overflow-hidden"
      ref={ref}
    >
      <h2 className={`text-h2 tracking-[.02em] ${inView && "animate-advantageFadeIn"}`}>
        Advantages
      </h2>
      <p className={`text-p opacity-85 tracking-[.01em] ${inView && "animate-advantageFadeIn85"}`}>
        We provide high quality product for everything you need
      </p>
      <div className="grid grid-cols-2 md:flex gap-2.5 mt-4 md:mt-8 tracking-[.01em]">
        {advantages.map((item, index) => {
          return (
            <div
              className={`md:w-1/4 h-44 px-4 py-10 gap-2 rounded-lg bg-backgroundColor flex flex-col items-center ${
                inView && (index < 2 ? "animate-advantageToRight" : "animate-advantageToLeft")
              }`}
            >
              <Image
                key={index}
                src={`/Advantage${index + 1}.svg`}
                width={64}
                height={64}
                alt="advantage"
              />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Advantages;
