import React, { FC, useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
};

const CategoryCard: FC<CategoryCardProps> = ({ title, description, link, imageUrl }) => {
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!clientSide) {
    return null;
  }

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto m-2">
      {/* Animated Border Wrapper */}
      <div
        className="relative rounded-xl p-[4px] 
          bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 
          animate-rainbowBorder"
        style={{ backgroundSize: "200% 200%" }}
      >
        {/* Inner Card with fixed height */}
        <Card
          className="w-full h-[400px] sm:h-[420px] md:h-[440px] p-2 sm:p-3 shadow-xl 
            transition-all duration-300 hover:scale-102 hover:shadow-2xl rounded-xl 
            overflow-hidden bg-opacity-90 flex flex-col"
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Image Section */}
          <div className="relative w-full aspect-[4/3] flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 640px) 70vw, (max-width: 768px) 35vw, 25vw"
              className="object-contain rounded-t-lg"
              priority
            />
          </div>

          {/* Header Section */}
          <CardHeader
            className="text-center justify-center text-orange-500 font-bold 
              text-xs sm:text-sm md:text-base p-1 sm:p-2 flex-shrink-0"
          >
            {title}
          </CardHeader>

          {/* Body Section with controlled height */}
          <CardBody className="flex flex-col text-white items-center justify-between p-2 sm:p-3 flex-1">
            <p
              className="text-[10px] sm:text-xs md:text-sm text-center text-amber-100 font-medium 
                mb-2 line-clamp-3 overflow-hidden"
            >
              {description}
            </p>

            <Link
              href={link}
              className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs 
                py-1 sm:py-1.5 px-2 sm:px-3 rounded mt-2 inline-block transition-colors duration-200 
                font-medium flex-shrink-0"
            >
              Explore {title}
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CategoryCard;