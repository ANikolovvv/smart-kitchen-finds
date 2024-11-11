import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  link: string;
  imageUrl: string; // Added image URL prop for product image
};

const ProductCard: FC<ProductCardProps> = ({ title, description, link, imageUrl }) => (
  <Card
    className="w-full justify-center h-auto items-center p-4 m-2 shadow-lg transition-transform transform hover:scale-105 rounded-xl"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  >
    {/* Product Image */}
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover rounded-t-xl mb-4" 
    />
    
    {/* Product Title */}
    <CardHeader className="text-center justify-center  text-orange-500 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
      {title}
    </CardHeader>

    <CardBody className="flex flex-col text-white items-center justify-center">
      {/* Product Description */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-amber-100 font-bold mb-2">
        {description}
      </p>
      
      {/* Product Link */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-200 font-bold hover:text-amber-300 text-xs sm:text-sm md:text-base lg:text-lg"
      >
        Explore our {title}.
      </Link>
    </CardBody>
  </Card>
);

export default ProductCard;


