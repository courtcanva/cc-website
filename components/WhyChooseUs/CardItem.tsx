import React from "react";
import ReasonDetails from "./ReasonDetails";
import { useInView } from "react-intersection-observer";

const CardItem = ({ ...item }) => {
  const { ref, inView } = useInView();
  const animation = inView ? item.animation : "";
  // NOTE: NEED TO ADJUST MARGIN according to content
  return (
    <div className="w-full " ref={ref}>
      <div
        className={`w-full flex flex-col items-center mt-4 md:mt-8  relative ${animation} md:animate-none`}
      >
        <h4 className={item.titleStyles}>{item.title}</h4>
        <div className={item.containerStyles}>
          <h4 className="text-[20px] font-light pt-[54px] pb-4 leading-[1.3] tracking-[.02em] md:max-w-[90%]">
            {item.heading}
          </h4>
          {item.details.map((detailItem: string, index: number) => (
            <ReasonDetails key={index} gradient={item.gradient} details={detailItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
