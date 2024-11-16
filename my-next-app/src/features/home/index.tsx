import Box from "@/components/atoms/Box";
import React, { FC, memo } from "react";
import ProductCard from "./CategoryCard";
import { featuredProducts } from "./featuredProducts";
import Title from "@/components/atoms/Title";
import PageWrapper from "@/components/atoms/PageWrapper";
import CategoryCard from "./CategoryCard";

const HomePage: FC = () => {
  return (
    <PageWrapper backgroundImage="/images/home-image.jpg">
      <Title>Welcome to the Future: Your Complete Smart Home Hub</Title>
      <Box className="flex flex-wrap justify-center gap-4 md:gap-6">
        {featuredProducts.map((product) => (
          <CategoryCard key={product.title} {...product} />
        ))}
      </Box>
    </PageWrapper>
  );
};

export default memo(HomePage);
