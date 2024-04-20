import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ContactForm = () => {
  const contactFormRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: ".query-text-element", 
          start: "top 80%" ,
        },
      });

      tl.from(".query-text-element", {
        opacity: 0,
        y: 100,
        stagger: 0.5,
      });

      const ti = gsap.timeline({
        scrollTrigger: {
          trigger: ".form-element",
          start: "top 80%",
        }
      })

      ti.from(".form-element", {
        opacity: 0,
        y: 100,
        stagger: 0.5,
      });

      return () => {
        tl.revert();
        ti.revert();
      }
      
    },
    { scope: contactFormRef }
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();


  };

  return (
    <div
      ref={contactFormRef}
      className="min-h-screen w-full px-20 py-10 bg-zinc-900 flex flex-col justify-around items-center lg:flex-row"
    >
      {/* <div className="query-text-element"> */}
      <div>
        <h1 className="query-text-element font-kanit text-7xl">
          Have any Queries?
        </h1>
        <span className="query-text-element font-kanit text-2xl">
          Feel free to contact us
        </span>
      </div>
      <form
        className="form-element w-[500px] h-[500px]  border-solid border-slate-50 p-10 rounded-lg flex flex-col gap-4 items-center shadow-[0_0px_10px_1px_rgba(255,255,255,0.3)] font-kanit"
        onSubmit={handleFormSubmit}
      >
        <input
          className="w-full bg-zinc-900 outline-none px-5 py-2 border-[2px] border-solid border-white rounded-[50px]"
          placeholder="Name"
          onChange={(e) => {setName(e.target.value)}}
        ></input>
        <input
          className="w-full bg-zinc-900 outline-none px-5 py-2 border-[2px] border-solid border-white rounded-[50px]"
          placeholder="Email"
          onChange={(e) => {setEmail(e.target.value)}}
        ></input>
        <textarea
          className="w-full bg-zinc-900 outline-none px-5 py-5 border-[2px] border-solid border-white rounded-[30px]"
          placeholder="Message"
          onChange={(e)=>{setMessage(e.target.value)}}
          rows={5}
        ></textarea>
        <button className="border-[2px] w-[30%] py-2 rounded-[80px] hover:bg-orange-100 hover:text-zinc-900 hover:font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
