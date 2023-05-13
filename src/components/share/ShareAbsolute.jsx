import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookSquare,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ShareAbsolute = () => {
  return (
    <div className="absolute top-[-120%] right-[-20%] bg-grayish-blue-dark flex w-max px-8 items-center justify-center h-16 rounded-[10px]  after:w-6 after:h-6 after:bg-inherit after:absolute after:bottom-[-0.5rem] after:rotate-45 ">
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
    </div>
  );
};

export default ShareAbsolute;
