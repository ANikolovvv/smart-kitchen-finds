import React, { FC } from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Box from "../Box";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  description: string;
  affiliateLink: string;
};

const ProductCard: FC<ProductCardProps> = ({
  name,
  image,
  price,
  description,
  affiliateLink,
}) => {
  return (
    <Card
      isFooterBlurred
      className="w-full sm:w-[300px] h-auto md:w-[350px] md:h-[300px] font-serif col-span-12 sm:col-span-6 md:col-span-4 shadow-lg rounded-lg overflow-hidden"
    >
      <CardHeader className="absolute z-10  flex-col bg-gradient-to-b from-black/60 to-transparent p-2 rounded-t-lg">
        <p className="text-xs font-mono text-orange-100 uppercase font-bold">
          {description}
        </p>
        <h2 className="text-yellow-300 font-mono font-bold text-lg mt-1">
          {name}
        </h2>
      </CardHeader>
      <Box className="relative w-full h-64 md:h-[300px]">
        <img
          alt={`Image of ${name}`}
          className="z-0 object-cover w-full h-full"
          src={image}
        />
      </Box>
      <CardFooter className="absolute bg-white/70  bottom-0 border-t border-gray-200 z-10 justify-between px-4 py-3 flex items-center">
        <Box className="flex flex-col">
          <p className="text-black text-base  md:text-sm font-extrabold tracking-tight font-mono text-center sm:text-left">
            Amazon Affiliate
          </p>
          <p className="text-black text-lg   font-extrabold tracking-tight font-mono text-center sm:text-left">
            ${price.toFixed(2)}
          </p>
        </Box>
        <Link href={affiliateLink} passHref>
          <Button
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-full"
          >
            Buy from Amazon
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
