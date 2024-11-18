import Box from "@/components/atoms/Box";
import CategoryArticles from "@/components/atoms/CategoryArticles";
import PageWrapper from "@/components/atoms/PageWrapper";
import Title from "@/components/atoms/Title";
import React, { FC } from "react";

const Blog: FC = () => {
  return (
    <PageWrapper>
      <Title>The Smart Life Blog: Expert Advice and Smart Home Hacks</Title>
      <CategoryArticles />
    </PageWrapper>
  );
};

export default Blog;
