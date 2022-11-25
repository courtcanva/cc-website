import React from "react";

const TextBox = ({ title, text, inView }: any) => {
  const isTennis = title === "tennis";

  return (
    <div
      className={`md:max-w-[22rem] self-center md:justify-self-start ${
        inView && (isTennis ? "animate-introToRight2" : "animate-introToLeft1")
      }`}
    >
      <h2 className="text-h2 mb-2">Design your dream {title} court</h2>
      <p className="text-p opacity-85 mb-4">{text}</p>
      <button className="btn-primary w-full md:w-fit">Get Started</button>
    </div>
  );
};

export default TextBox;
