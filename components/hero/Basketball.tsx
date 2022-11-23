import React from "react";
import Spline from "@splinetool/react-spline";

const Basketball = () => {
  return (
    <div className="w-[100%] md:w-[60%] h-[70%] md:h-[100%] relative">
      <Spline
        scene="https://prod.spline.design/MeMyEYRtOOavHhan/scene.splinecode"
        className="w-[90%] "
      />
    </div>
  );
};

export default Basketball;
