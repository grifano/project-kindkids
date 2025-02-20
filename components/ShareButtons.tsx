"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { FC } from "react";
import { FaLink } from "react-icons/fa";

interface ShareButtonsProps {
  url: string;
}

const ShareButtons: FC<ShareButtonsProps> = ({ url }) => {
  const iconBgStyle = { fill: "#F9F6FC" };

  return (
    <ul className="flex items-center justify-center gap-2">
      <li className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition-colors hover:bg-primary-purple">
        <button
          className="hover: flex h-[32px] w-[32px] items-center justify-center rounded-full bg-primary-lightPurple"
          onClick={() => {
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard!");
          }}
        >
          <FaLink className="text-primary-purple" />
        </button>
      </li>
      <li className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition-colors hover:bg-primary-purple">
        <FacebookShareButton url={url}>
          <FacebookIcon
            bgStyle={iconBgStyle}
            size={32}
            round
            iconFillColor="#A88BCB"
          />
        </FacebookShareButton>
      </li>
      <li className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition-colors hover:bg-primary-purple">
        <LinkedinShareButton url={url}>
          <LinkedinIcon
            bgStyle={iconBgStyle}
            size={32}
            round
            iconFillColor="#A88BCB"
          />
        </LinkedinShareButton>
      </li>
      <li className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition-colors hover:bg-primary-purple">
        <TwitterShareButton url={url}>
          <TwitterIcon
            bgStyle={iconBgStyle}
            size={32}
            round
            iconFillColor="#A88BCB"
          />
        </TwitterShareButton>
      </li>
    </ul>
  );
};

export default ShareButtons;
