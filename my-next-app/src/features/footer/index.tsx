import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full p-4 bg-gray-800 text-center md:text-left">
      <h2 className="text-xs sm:text-sm md:text-base text-orange-400 mt-2 md:mt-0">
        As an Amazon Associate, we earn from qualifying purchases. Our curated
        selection of smart home devices helps you find the best products to
        enhance your home.
      </h2>
      <p className="text-xs text-gray-400 mt-2">
        © {new Date().getFullYear()} Smart Home Affiliate Hub. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
