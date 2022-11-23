import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  gradient: string[];
}

const ReasonDetails = ({ gradient }: Props) => {
  return (
    <div className="flex space-x-2 items-center ">
      <div
        className={`rounded-full w-5 h-5 bg-gradient-to-tr ${gradient}  grid place-items-center `}
      >
        <AiOutlineCheck color="white" size="12px" />
      </div>
      <span className="inline">Reason 1 baba bla </span>
    </div>
  );
};

export default ReasonDetails;
