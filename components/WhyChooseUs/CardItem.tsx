import React from "react";
import ReasonDetails from "./ReasonDetails";

const CardItem = ({ ...item }) => {
  return (
    <div className="w-[100%] md:w-80 flex flex-col items-center mt-8 relative animate-enterSlow md:animation-none">
      <h4 className={item.titleStyles}>{item.title}</h4>
      <div className={item.containerStyles}>
        <div className=" pl-4 w-[100%] h-cardBody  rounded-md bg-backgroundColor">
          <h4 className="text-[20px] font-light pt-12 ">Design Fees</h4>
          <p className="font-light text-[12px] mb-4">free</p>
          {item.details.map((detailItem: string, index: number) => (
            <ReasonDetails key={index} gradient={item.gradient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
