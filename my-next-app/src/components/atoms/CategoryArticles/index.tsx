import React from "react";
import { categories } from "./categories";
import Box from "../Box";

const CategoryArticles: React.FC = () => {
  return (
    <Box className="container mx-auto p-4 grid grid-cols-1  gap-6">
      {categories.map((category, index) => (
        <Box
          key={index}
          className="rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow bg-white"
          style={{ boxShadow: "0 4px 20px rgba(255, 165, 0, 0.5)" }}
        >
          <a href={category.url}>
            <img
              src={category.imageUrl}
              alt={category.label}
              className="w-full h-32 sm:h-40 md:h-44  object-cover rounded-t-lg"
            />
          </a>
          <h2 className="text-xl  font-mono text-orange-500 uppercase font-bold mt-2">
            {category.title}
          </h2>
          <p className="text-sm md:text-base font-mono mt-2 text-gray-700">
            {category.content}
          </p>
          <a
            href={category.amazonLink}
            className="block mt-4 text-sm md:text-base lg:text-lg text-blue-500 hover:underline font-medium md:font-semibold transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Amazon
          </a>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryArticles;
