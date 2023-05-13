"use client";
import Footer from "@/components/footer/Footer";
import UseMedia from "@/hooks/UseMedia";
import Image from "next/image";
import React from "react";

const page = () => {
  const mobile = UseMedia("(max-width:48rem)");
  console.log(mobile);
  return (
    <article
      className="c-card grid w-[90%] max-w-[400px] md:min-w-[732px] bg-white rounded-[10px] m-auto  md:pb-0 md:flex overflow-hidden md:overflow-visible  shadow-xl"
      style={{ boxShadow: "0px 40px 40px -10px rgba(201, 213, 225, 0.503415)" }}
    >
      <div className="c-card__img  md:w-[286px] overflow-hidden md:rounded-tl-[10px] md:rounded-bl-[10px] ">
        <Image
          className="md:object-cover h-full"
          src="/assets/images/drawers.jpg"
          width={400}
          height={300}
          alt="Drawers image"
        />
      </div>

      <div className="c-card__text mt-8  md:ml-10 md:p-0 md:w-[60%] ">
        <div className="c-card__text__title px-8 md:px-0">
          <span className="font-bold leading-6 block tracking-[0.01em] w-[95%] md:text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </span>
        </div>

        <div className="c-card__text__paragraph mt-2 w-[94%] px-8 md:px-0">
          <p className="text-[13px] tracking-[0.016em] leading-5">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>

        <div className="c-card__footer mt-9 md:mt-4 md:pb-5 ">
          <Footer />
        </div>
      </div>
    </article>
  );
};

export default page;
