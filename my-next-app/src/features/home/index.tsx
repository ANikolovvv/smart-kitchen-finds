import Box from "@/components/atoms/Box";
import React, { FC, memo } from "react";
import ProductCard from "./ProductCard";
import { featuredProducts } from "./featuredProducts";

const HomePage: FC = () => {
  return (
    <Box
      className="flex w-full font-serif p-4 rounded-lg shadow-lg"
      style={{
        backgroundImage: "url('/images/home-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px", // Updated border radius for consistent styling
        boxShadow: "0 2px 15px rgba(255, 165, 0, 0.5)",
      }}
    >
      <Box className="max-w-4xl mx-auto text-center p-4 sm:p-6 md:p-8">
        <h1 className="text-lg  sm:text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold mb-4">
          Discover Smart Home Devices
        </h1>
        <Box className="flex flex-col items-center justify-center gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(HomePage);
