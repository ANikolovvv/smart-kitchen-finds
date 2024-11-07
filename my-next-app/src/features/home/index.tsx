import Box from "@/components/atoms/Box";
import React, { FC, memo } from "react";
import ProductCard from "./ProductCard";
import { featuredProducts } from "./featuredProducts";

const HomePage: FC = () => {
  return (
    <Box className="flex-grow w-full p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Discover Smart Home Devices
      </h1>
      <p className="text-center mb-10 text-gray-600">
        Explore top-rated smart devices to elevate your home’s connectivity and
        convenience.
      </p>
      <Box className="flex flex-wrap justify-center gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </Box>
    </Box>
  );
};

export default memo(HomePage);
