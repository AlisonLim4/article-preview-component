import React from "react";
import ShareButton from "../button/ShareButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookSquare,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Share = ({ handleClick }) => {
  return (
    <div className="share-social bg-grayish-blue-dark w-full flex pl-8 items-center h-16 ">
      <div>
        <p className="text-[13px] text-grayish-blue uppercase tracking-[5px]">
          Share
        </p>
      </div>
      <div className="social-icons flex gap-4 ml-5">
        <Link href="">
          <FontAwesomeIcon icon={faFacebookSquare} size="xl" color="#fff" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faTwitter} size="xl" color="#fff" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faPinterest} size="xl" color="#fff" />
        </Link>
      </div>
      <div className="share_button  bg-dark-blue-desaturated rounded-full py-1 px-2 ml-14 ">
        <ShareButton white="yes" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Share;
