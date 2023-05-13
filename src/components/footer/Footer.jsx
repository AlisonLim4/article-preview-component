"use client";
import React, { useState } from "react";
import Social from "../social/Social";
import Share from "../share/Share";
import UseMedia from "../../hooks/UseMedia";
import ShareAbsolute from "../share/ShareAbsolute";

const Footer = () => {
  const [shareIsOn, setShareIsOn] = useState(false);
  const mobile = UseMedia("(max-width:48rem)");

  function handleClickShareMobile() {
    setShareIsOn(!shareIsOn);
    shareIsOn ? console.log("share") : console.log("Não Share");
  }

  function handleClickShare() {
    setShareIsOn(!shareIsOn);
    console.log("não é mobile!");
  }

  return (
    <div className="relative ">
      {shareIsOn && mobile && (
        <Share handleClick={handleClickShareMobile} mobile={mobile} />
      )}

      {shareIsOn && !mobile && (
        <>
          <ShareAbsolute handleClick={handleClickShare} mobile={mobile} />
          <Social
            handleClick={handleClickShareMobile}
            mobile={mobile}
            shareIsOn={shareIsOn}
          />
        </>
      )}

      {!shareIsOn && mobile && (
        <Social handleClick={handleClickShareMobile} mobile={mobile} />
      )}
      {!shareIsOn && !mobile && (
        <Social handleClick={handleClickShare} mobile={mobile} />
      )}
    </div>
  );
};

export default Footer;
