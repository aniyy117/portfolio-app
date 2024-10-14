import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const social = [
  {
    name: "Github",
    path: "https://github.com/aniyy117",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/aniket-jadhav-847151157/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Twitter",
    path: "https://x.com/saysditto",
    icon: <FaTwitter />,
  },
  {
    name: "Whatsapp",
    path: "https://wa.me/+918178990405",
    icon: <FaWhatsapp />,
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
