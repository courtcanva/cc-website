import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  gradient: string[];
  details: string;
}

const ReasonDetails = ({ gradient, details }: Props) => {
  return (
    <div className="flex space-x-2 items-center  mb-2 ">
      <div className={`rounded-full min-w-5 min-h-5 ${gradient} grid place-items-center `}>
        <AiOutlineCheck color="white" size="0.75rem" />
      </div>
      <span className="inline md:text-xs lg:text-base">{details}</span>
    </div>
  );
};

export default ReasonDetails;
