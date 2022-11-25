import React from "react";
import ReasonDetails from "./ReasonDetails";
import { useInView } from "react-intersection-observer";



const CardItem = ({...item}) => {
  const { ref, inView } = useInView();
  const animation = inView  ? item.animation : "";

  return (
    <div className="w-full "ref={ref}>
    <div
      className={`w-full md:w-80 flex flex-col items-center mt-4 md:mt-8 relative ${animation} md:animate-none`}
     >
      <h4 className={item.titleStyles}>{item.title}</h4>
      <div className={item.containerStyles}>
        <h4 className="text-[20px] font-light pt-12  leading-[1.3] tracking-[.02em]">Design Fees</h4>
        <p className="font-light text-[12px] mb-4 mt-[6px] tracking-[.01em]">free</p>
        {item.details.map((detailItem: string, index: number) => (
          <ReasonDetails key={index} gradient={item.gradient} details={detailItem} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardItem;
