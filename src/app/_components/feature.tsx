import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FeatureProps {
  title: string;
  primary: string;
  secondary: string;
}

gsap.registerPlugin(ScrollTrigger);


const Feature = ({ title, primary, secondary }: FeatureProps) => {
  const featureRef = useRef(null);
  useGSAP(
    () => {
      const text = featureRef.current;

      const tl = gsap.timeline();
    },
    { scope: featureRef }
  );

  return (
    <div ref={featureRef} className="flex flex-col justify- items-center opacity-0 feat-feat">
      {/* <button onClick={() => {setScroll(!scroll)}}>Click me </button> */}
      <div className="flex flex-col justify-center items-center mb-2 lg:mb-8">
        <span className="text-3xl font-playFair text-amber-700 lg:text-5xl">
          {primary}
        </span>
        <span className="text-xl font-kanit text-white ">{secondary}</span>
      </div>
      <div>
        <span className="text-xl font-kanit font-bold tracking-tight text-[rgb(255,219,158)] lg:text-2xl">{title.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default Feature;
