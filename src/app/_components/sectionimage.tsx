import React, { useRef, RefObject, ElementRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { sectionImagesArr } from "@/utils/constant";

interface SectionImageProps {
  // targetRef: RefObject<ElementRef<"div">>;
  imageNumber: number;
}

const SectionImage = ({ imageNumber }: SectionImageProps) => {
  const targetRef = useRef(null);

  useGSAP(() => {
    const image = targetRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      image,
      {
        clipPath: "inset(0% 100% 0% 0% rounded 10px)",
        opacity: 0,
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        borderRadius: "20px",
        ease: "power3.inOut",
        duration: 1,
        opacity: 1,
      }
    );

    return(()=>{
      tl.revert();
    })
  }, {dependencies: [imageNumber]});

  // const sectionImageRef = useRef(null);
  // useGSAP(()=>{
  //   console.log(`component mounted ${imageNumber}`)
  //   const tl = gsap.timeline();
  //   tl.to("span", {
  //     // opacity: 0,
  //     // y: 100,
  //     color: "blue",
  //     duration: 0.5,
  //   });

  //   return(()=>{
  //     console.log(`component unmounted ${imageNumber}`);
  //     tl.to('span', { color: "red"});
  //   });
  // },{ dependencies: [imageNumber],scope: sectionImageRef})
  return (
    <div
      ref={targetRef}
      className=".section-image-cont relative z-20 w-[850px] aspect-[12/9] rounded-sm font-kanit"
    >
      <img
        className="absolute top-0 left-0 object-cover -z-10"
        src={sectionImagesArr[imageNumber].src}
        // src="/assets/images/section-image-0.avif"
        alt={sectionImagesArr[imageNumber].title}
      />
      <div className="w-full h-full bg-[rgba(0,0,0,0.4)] z-30 p-20 flex flex-col gap-3">
        <h1 className="z-30 text-7xl text-amber-700 drop-shadow-xl">{sectionImagesArr[imageNumber].primary}</h1>
        <span className="text-2xl text-orange-100">{sectionImagesArr[imageNumber].secondary}</span>
        <span className="text-2xl text-orange-100">{sectionImagesArr[imageNumber].ending}</span>
      </div>
    </div>
  );
};

export default SectionImage;
