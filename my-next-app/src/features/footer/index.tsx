import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full p-4 bg-gray-800 text-center md:text-left">
      <h3 className="text-xs sm:text-sm md:text-base text-orange-400 mt-2 md:mt-0">
        As an Amazon Associate, we earn from qualifying purchases. This means
        that if you purchase a product through one of our affiliate links, we
        may receive a small commission at no additional cost to you. Our curated
        selection of smart home devices helps you find the best products to
        enhance your home.
      </h3>
      <p className="text-xs text-gray-400 mt-2">
        © {new Date().getFullYear()} Smart Home Affiliate Hub. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
