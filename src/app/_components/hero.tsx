import React, { useRef, useEffect, useState } from "react";
import { RefObject, ElementRef } from "react";
import MainContent from "./maincontent";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface HeroProps {
}

const Hero = ({ }: HeroProps) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  // const [sectionHeight, setSectionHeight] = useState(0);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     setSectionHeight(contentRef.current);
  //   }
  // }, []);

  useGSAP(
    () => {
      // const text = textRef.current;
      // const section = sectionRef.current;
      // const video = videoRef.current;
      const tl = gsap.timeline();

      tl.from(".ford-title-element", {
        opacity: 0,
        y: 40,
        ease: "back.inOut",
        stagger: 0.2,
      });

    },
    { scope: sectionRef }
  );

  return (
    <section
      // ref={heroRef}
      ref={sectionRef}
      // className="flex flex-col justify-center items-center w-full h-[calc(100vh-30px)] relative z-20 overflow-hidden"
      className="flex flex-col justify-center items-center w-full min-h-screen sticky top-0 left-0 -z-10 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full inset-0 object-cover z-[-20] pointer-events-none scale-[1.4]"
        ref={videoRef}
      >
        <source src="/assets/videos/videoplayback.mp4" type="video/mp4" />
      </video>
      <div className="z-1 w-full h-full p-12 bg-[rgba(0,0,0,0.6)] flex flex-1 justify-center items-center pb-[100px] lg:items-center">
        <p
          ref={textRef}
          className="text-7xl flex flex-col items-center justify-center lg:flex-row  md:text-[11em]"
        >
          <span
            // style={{ border: "1px solid blue" }}
            className="ford-title-element font-oswald font-bold tracking-tighter ford-title-element leading-none  text-[#ffdb9e] drop-shadow-[0_15px_10px_rgba(20,20,20,0.8)] lg:mr-10"
          >
            FORD
          </span>
          <span className="ford-title-element font-oswald relative text-amber-800 tracking-tighter font-bold">
            MUSTANG
          </span>
        </p>
      </div>
      {/* <MainContent mainContentRef={contentRef} /> */}
    </section>
  );
};

export default Hero;
