import Link from "next/link";
import React from "react";

const TextBox = ({ title, text, inView, tennis }: any) => {
  const designUrl = process.env.NEXT_PUBLIC_DESIGN_URL || "http://localhost:3000/";

  return (
    <div
      className={`md:max-w-[26rem] self-center md:justify-self-start ${
        inView && (tennis ? "animate-introToRight2" : "animate-introToLeft1")
      }`}
    >
      <h2 className="text-h2 mb-2">{title}</h2>
      <p className="text-p opacity-85 mb-4">{text}</p>
      <Link className="btn-primary text-center md:w-fit block" href={designUrl}>
        Get Started
      </Link>
    </div>
  );
};

export default TextBox;
