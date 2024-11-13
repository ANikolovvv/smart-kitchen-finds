import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
 
};

const CategoryCard: FC<CategoryCardProps> = ({ title, description, link, imageUrl }) => (
  <Card
    className="w-full justify-center h-auto items-center p-4 m-2 shadow-lg transition-transform transform hover:scale-105 rounded-xl"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  >
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover rounded-t-xl mb-4" 
    />
  
    <span className="bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-full mb-2">
      Best Seller
    </span>

   
    <CardHeader className="text-center justify-center text-orange-500 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
      {title}
    </CardHeader>

    <CardBody className="flex flex-col text-white items-center justify-center">
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-amber-100 font-bold mb-2">
        {description}
      </p>
    
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 inline-block"
      >
        Explore our {title}
      </Link>
    </CardBody>
  </Card>
);

export default CategoryCard;



