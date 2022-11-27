import React from "react";
import CardItem from "./CardItem";
import { cartItemStyles } from "./cardItem.styles";

const CardContainer = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:gap-10  md:animate-enterSlow w-[95%] item-center lg:px-10">
      {cartItemStyles.map((item, index) => (
        <CardItem {...item} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
