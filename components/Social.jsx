import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const social = [
  {
    name: "Github",
    path: "",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    path: "",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Twitter",
    path: "",
    icon: <FaTwitter />,
  },
];
const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {social.map((item) => (
        <Link href={item.path} key={item.name} className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
