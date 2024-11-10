import Box from "@/components/atoms/Box";
import React, { FC, memo } from "react";
import ProductCard from "./ProductCard";
import { featuredProducts } from "./featuredProducts";

const HomePage: FC = () => {
  return (
    <Box
      className="flex-grow w-full p-4 rounded-lg shadow-lg"
      style={{
        backgroundImage:
          "url('https://alnasser.solutions/wp-content/uploads/2024/08/Smart-lighting.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "16px", // заоблени ъгли
        boxShadow: "0 4px 20px rgba(255, 165, 0, 0.5)",
      }}
    >
      <Box className="max-w-4xl mx-auto text-center p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Discover Smart Home Devices
        </h1>
        <p className="mb-6 text-gray-700">
          Explore top-rated smart devices to elevate your home’s connectivity
          and convenience.
        </p>
        <Box className="flex flex-wrap justify-center gap-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(HomePage);
