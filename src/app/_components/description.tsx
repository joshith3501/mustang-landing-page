import React, { useState, useRef } from "react";
import SectionImage from "./sectionimage";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MoveRight } from "lucide-react";

const Description = () => {
  const [sectionNumber, setSectionNumber] = useState(0);

  const tl = gsap.timeline();
  // const imageRef = useRef(null);

  // useGSAP(()=>{
  //   const image = imageRef.current;
  //   tl.from(image, {opacity: 0})
  //   .to(image, {
  //     color: 'blue',
  //     duration: 1,
  //   })
  // },[sectionNumber]);

  const handleSectionClick = (sectionIndex: number) => {
    if (sectionIndex !== sectionNumber) {
      // console.log("hadnleSectionClick");
      // tl.to(imageRef.current, { color: "red", duration: 1 });
      // .to(imageRef.current, {opactiy: 0,duration: 1});

      // tl.revert();
      setSectionNumber(sectionIndex);
    }
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // console.log(e.pageX);
    // console.log(e.pageY);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e.pageX);
    console.log(e.pageY);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};


  return (
    <div className="w-full min-h-screen flex flex-row justify-around items-center z-10 bg-slate-600 dark:bg-zinc-900">
      <div className="flex flex-col items-start font-kanit">
        <button
          className="relative border-solid border-white text-4xl min-w-[350px] p-5 text-left flex flex-row justify-between items-center hover:bg-orange-100 hover:text-black overflow-hidden" 
          onClick={() => {
            handleSectionClick(0);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          // onMouseEnter={(e)=>{}}
          onMouseLeave={handleMouseLeave}
        >
          {/* <div className="absolute w-[500px] h-[500px] rounded-[50%] left-[0] top-[0] z-15 bg-orange-100"></div> */}
          <span className="z-[50]">Power</span>
          <MoveRight />
        </button>
        {/* <button></button> */}
        {/* <button></button> */}
        <button
          className="border-solid border-white text-4xl min-w-[350px] p-5 text-left flex flex-row justify-between items-center rounded-sm hover:bg-orange-100 hover:text-black"
          onClick={() => {
            handleSectionClick(1);
          }}
          onMouseEnter={handleMouseEnter}
        >
          <span>Handling</span>
          <MoveRight />
        </button>
        <button
          className="border-solid border-white text-4xl min-w-[350px] p-5 text-left flex flex-row justify-between items-centerrounded-sm hover:bg-orange-100 hover:text-black  "
          onClick={() => {
            handleSectionClick(2);
          }}
          onMouseEnter={handleMouseEnter}
        >
          <span>Drift Brake</span>
          <MoveRight />
        </button>
        <button
          className="border-solid border-white text-4xl min-w-[350px] p-5 text-left flex flex-row justify-between items-center rounded-sm hover:bg-orange-100 hover:text-black"
          onClick={() => {
            handleSectionClick(3);
          }}
          onMouseEnter={handleMouseEnter}
        >
          <span>Dark Horse</span>
          <MoveRight />
        </button>
      </div>

      {/* {sectionNumber === 0 && (
        <SectionImage targetRef={imageRef} imageNumber={sectionNumber} />
      )}
      {sectionNumber === 1 && (
        <SectionImage targetRef={imageRef} imageNumber={sectionNumber} />
      )} */}

      {/* {sectionNumber === 0 && (
        <SectionImage
          // targetRef={imageRef}
          imageNumber={sectionNumber}
        />
      )}
      {sectionNumber === 1 && (
        <SectionImage
          // targetRef={imageRef}
          imageNumber={sectionNumber}
        />
      )} */}
      <SectionImage imageNumber={sectionNumber} />
    </div>

    //https://youtu.be/78Ieuw_kvWI?si=CiSk_cC-NalQ0Urc Video for horizontal scroll animation
  );
};

export default Description;
