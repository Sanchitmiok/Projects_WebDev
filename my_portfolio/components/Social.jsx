import { icons } from "lucide-react";
import Link from "next/link";
import path from "path";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "/resume",
  },
  {
    icon: <FaLinkedin />,
    path: "/resume",
  },
  {
    icon: <FaTwitter />,
    path: "/resume",
  },
  
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} className={iconStyles} href={social.path}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
