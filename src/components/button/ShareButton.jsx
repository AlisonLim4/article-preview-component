import Image from "next/image";
import React from "react";

const ShareButton = ({ handleClick, white }) => {
  return (
    <button onClick={handleClick}>
      <Image
        src={
          white
            ? "/assets/images/icon-share-white.svg"
            : "/assets/images/icon-share.svg"
        }
        width={15}
        height={15}
        alt="Share Icon"
      />
    </button>
  );
};

export default ShareButton;
