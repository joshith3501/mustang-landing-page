import React, { useRef} from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

interface SquareButtonProps {
  contentTitle: string;
  handleClick: () => void;
  className : string;
}

const SquareButton = ({contentTitle, handleClick, className} : SquareButtonProps) => {

  const buttonRef = useRef(null);

  // const {gsapContext} = useGSAP(()=>{},{})

  // const handleMouseEnter = gsapContext(())

  return (
    <div ref={buttonRef}>SquareButton</div>
  )
}

export default SquareButton