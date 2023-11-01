import React from "react";
import {
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">
            Yum Eats
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            enim consectetur sint excepturi beatae libero rerum rem magni
            necessitatibus aperiam, asperiores, sit dicta totam consequatur eos
            perferendis, fuga quasi veritatis?
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a
              href="https://www.linkedin.com/in/md-amir-alam-1a9529190/"
              target="_blank"
              rel="noreferre noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.github.com/Amir965"
              target="_blank"
              rel="noreferre noreferrer"
            >
              <FaGithubSquare size={30} />
                      </a>
                      <a
              href="https://md-amir-alam.netlify.app/"
              target="_blank"
              rel="noreferre noreferrer"
            >
              <FaDribbbleSquare size={30} />
            </a>
            <a
              href="https://www.instagram.com/sohail5547/"
              target="_blank"
              rel="noreferre noreferrer"
            >
              <FaInstagramSquare size={30} />
            </a>
            
            <a
              href="https://twitter.com/AmirAla29803835"
              target="_blank"
              rel="noreferre noreferrer"
            >
              <FaTwitterSquare size={30} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-white">
        &copy; {new Date().getFullYear()}. <span>Md Amir Alam</span>. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
