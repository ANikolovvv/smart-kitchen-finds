import Box from "@/components/atoms/Box";
import React, { FC, memo } from "react";
import ProductCard from "./CategoryCard";
import { featuredProducts } from "./featuredProducts";
import Title from "@/components/atoms/Title";
import PageWrapper from "@/components/atoms/PageWrapper";

const HomePage: FC = () => {
  return (
    <PageWrapper>
      <Title>Welcome to the Future: Your Complete Smart Home Hub</Title>
      <Box className="flex flex-col items-center justify-center gap-4 md:gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </Box>
    </PageWrapper>
  );
};

export default memo(HomePage);
