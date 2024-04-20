"use client";
import Image from "next/image";
import NavBar from "./_components/navbar";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


import Hero from "./_components/hero";
import MainContent from "./_components/maincontent";
import Description from "./_components/description";
import ContactForm from "./_components/contactform";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const isMobile = useMediaQuery({ minWidth: 767})
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 930); 
      console.log(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center relative scroll-smooth">

      {isMobile ? (
        <h1>
          Currently, this website doesn't support mobile devices, please switch a full desktop view
        </h1>
      ) : (
        <>
          <Hero />
          <MainContent />
          <Description />
          <ContactForm />
        </>
      )}
    </main>
  );
}
