import React from "react";
import { categories } from "./pageNames";
import {Link} from "@nextui-org/react";
import Box from "@/components/atoms/Box";

const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Box className="text-2xl font-bold text-orange-500">SmartifyTech</Box>

        <div className="hidden sm:flex space-x-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
