import React from "react";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from 'usehooks-ts'

const BasketballCourt = ()=> {
  const matchIpad = useMediaQuery('(min-width: 768px)')
  const matchDesktop = useMediaQuery('(min-width: 1024px)')
  const handleLoad = ()=> {
    return matchDesktop  ? 1 : matchIpad ?  0.8 : 0.5;
  }

  return (
    <div className="w-full h-[60vh] relative   md:absolute bottom-0 md:bottom-auto md:left-80 pb-4 lg:left-80 z-10">
      <Spline
        scene="https://prod.spline.design/MeMyEYRtOOavHhan/scene.splinecode"
        onLoad={(spline) => spline.setZoom(handleLoad()) }
      />
    </div>
  );
};

export default BasketballCourt;
