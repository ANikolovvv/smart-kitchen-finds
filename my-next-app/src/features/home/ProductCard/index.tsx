import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => (
  <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 m-2 shadow-md transition-transform transform hover:scale-105">
    <CardHeader className="font-bold text-lg">{title}</CardHeader>
    <CardBody>
      <img
        src={imageUrl}
        alt={`${title} image`}
        className="rounded-md w-full h-40 object-cover mb-2"
      />
      <p className="text-sm mb-2">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Explore our {title}.
      </Link>
    </CardBody>
  </Card>
);

export default ProductCard;

