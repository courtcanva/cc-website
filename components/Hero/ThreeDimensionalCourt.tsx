import React from "react";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "usehooks-ts";

const ThreeDimensionalCourt = () => {
  const matchIpad = useMediaQuery("(min-width: 768px)");
  const matchDesktop = useMediaQuery("(min-width: 1024px)");
  const handleLoad = () => {
    return matchDesktop ? 1 : matchIpad ? 0.8 : 0.45;
  };

  return (
    <div className="w-full h-full relative  md:absolute  md:bottom-0 md:left-80 lg:left-80 z-20">
      <Spline
        scene="https://prod.spline.design/MeMyEYRtOOavHhan/scene.splinecode"
        onLoad={(spline) => spline.setZoom(handleLoad())}
      />
    </div>
  );
};

export default ThreeDimensionalCourt;
