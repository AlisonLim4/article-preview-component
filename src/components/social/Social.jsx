"use client";
import Image from "next/image";
import React from "react";
import ShareButton from "../button/ShareButton";

const Social = ({ handleClick, shareIsOn }) => {
  return (
    <section className="px-8 md:px-0 md:pr-6  ">
      <div className=" social-container share flex justify-between items-center pb-5">
        <div className="social flex gap-4">
          <div className="profile_photo rounded-full overflow-hidden">
            <Image
              src="/assets/images/avatar-michelle.jpg"
              width={50}
              height={50}
              alt="Profile photo"
            />
          </div>
          <div className="profile_info">
            <h2>Michelle Appleton</h2>
            <span>28 Jun 2020</span>
          </div>
        </div>
        <div
          className={`share_button  ${
            shareIsOn ? "bg-dark-blue-desaturated" : "bg-grayish-blue-light"
          } rounded-full py-1 px-2`}
        >
          <ShareButton handleClick={handleClick} white={shareIsOn} />
        </div>
      </div>
    </section>
  );
};

export default Social;
