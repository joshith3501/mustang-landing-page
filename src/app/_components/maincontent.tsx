"use client";

import React, { ElementRef, RefObject, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Feature from "./feature";

import { features, overview } from "@/utils/constant";
import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);
interface Props {
}
const MainContent = ({}: Props) => {
  const mainContentRef = useRef(null);

    useGSAP(
      () => {
        // using timeline animating the clip-path
        const ti = gsap.timeline({
          scrollTrigger: {
            trigger: ".feat-feat",
            start: "top bottom",
            scrub: true,
          }
        })

        ti.to(".feat-feat", {
          opacity: 1,
          ease: "power4",
          stagger: 0.1,
        })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".image-clip-path",
            start: "top center",
          },
        });
        tl.fromTo(
        ".image-clip-path",
        {
        
          clipPath: "inset(30% 30% 30% 30%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power4.inOut",
          duration: 0.7,
        }
      )

      const to = gsap.timeline({
        scrollTrigger: {
          trigger: ".overview-text-element",
          start: "top center",
          scrub: true,
        }
      });

      to.from(".overview-text-element", {
        color: "rgb(180 83 9/ 1)",
        stagger: 0.5,
      });


      return(()=>{
        ti.revert();
        tl.revert();
      })

    },
    { scope: mainContentRef }
  );
  return (
    <div
      ref={mainContentRef}
      // className="min-h-screen parallax-element text-black absolute top-0 left-0 z-30 bg-white h-[100vh] w-full"
      // className="min-h-screen parallax-element text-black bg-white dark:bg-[#191919] z-10 w-full"
      className="min-h-screen text-slate-500 bg-white dark:bg-zinc-900 z-10 w-full flex flex-col items-center gap-20  py-20"
    >
      <div className="flex flex-col gap-[70px] lg:flex-row">
        {features.map((feature, index) => {
          return <Feature {...feature} key={feature.title} />;
        })}
      </div>
      <div className="image-clip-path relative w-full h-[200px] bg-slate-400 md:h-[300px] lg:h-[600px]">
        <img
          className="absolute left-0 top-0 object-cover"
          src="/assets/images/hero_mustang.avif"
          alt="mustang_photo"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-32 my-16">
        {/* <h1 className="text-orange-700 text-6xl mb-5 font-bold">
          Overview
        </h1> */}
        <p className="font-kanit text-3xl text-left tracking-normal font-bold flex flex-col text-[rgb(255,219,158)] ">
          {/* {overview.text.toUpperCase()} */}
          {overview.text.map((text) => (
            <span className="overview-text-element text-8xl" key={text}>{text}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MainContent;
