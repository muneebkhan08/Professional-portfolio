import React from 'react';
import {
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Links() {
  return (
    <div className="relative text-white shadow-md">
        {/* Social Icons */}
        <div className="flex space-x-8 text-3xl">
          <a
            href="https://www.linkedin.com/in/muhammadmuneebkhan8304"
            target="_blank"
            rel="noopener noreferrer"
            className=" 
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://discord.com/users/1178243724824825896"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaDiscord />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100064171872590"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaFacebook />
          </a>

          <a
            href="https://x.com/MuneebKhan0834?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/muhammadmuneeb_khan/profilecard/?igsh=dDJqZXJ0MG4zMDMz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaInstagram />
          </a>
        </div>
    </div>
  );
}
