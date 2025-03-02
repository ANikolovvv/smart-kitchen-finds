import React, { memo } from "react";
import { categories } from "./categories";
import Box from "../Box";

interface Category {
  url: string;
  imageUrl: string;
  label: string;
  title: string;
  content: string;
  amazonLink: string;
}

const CategoryCard: React.FC<{ category: Category }> = memo(({ category }) => (
  <Box
    className="rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1"
    style={{ boxShadow: "0 4px 20px rgba(255, 165, 0, 0.5)" }}
  >
    <a href={category.url} aria-label={`Read more about ${category.title}`}>
      <img
        src={category.imageUrl}
        alt={category.label}
        className="w-full h-32 sm:h-40 md:h-44 object-cover rounded-t-lg"
        loading="lazy"
      />
    </a>
    <h2 className="text-xl font-mono text-orange-500 uppercase font-bold mt-2">
      {category.title}
    </h2>
    <p className="text-sm md:text-base font-mono mt-2 text-gray-700">
      {category.content}
    </p>
    <a
      href={category.amazonLink}
      className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 text-sm md:text-base font-medium"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${category.title} on Amazon`}
    >
      View on Amazon
    </a>
  </Box>
));

CategoryCard.displayName = 'CategoryCard';

const CategoryArticles: React.FC = () => {
  return (
    <Box className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <CategoryCard key={`category-${index}`} category={category} />
      ))}
    </Box>
  );
};

export default memo(CategoryArticles);
