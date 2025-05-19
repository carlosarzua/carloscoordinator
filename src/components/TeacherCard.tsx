
import { ReactNode } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

interface TeacherCardProps {
  name: string;
  image: string;
  title: string;
  description: string;
  country: string;
  children?: ReactNode;
}

export const TeacherCard = ({
  name,
  image,
  title,
  description,
  country,
  children,
}: TeacherCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl">
      {/* Decorative elements for fun feel */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-brand-yellow opacity-20 group-hover:scale-150 transition-all duration-500"></div>
      <div className="absolute -left-12 -bottom-12 h-24 w-24 rounded-full bg-brand-purple opacity-20 group-hover:scale-150 transition-all duration-500"></div>
      
      <div className="relative z-10 bg-white border border-gray-100 overflow-hidden">
        <div className="relative">
          <AspectRatio ratio={4/3} className="overflow-hidden">
            <img
              src={image}
              alt={`${name}, ${title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-2 right-2 bg-gradient-to-r from-brand-orange to-brand-yellow text-white py-1 px-3 rounded-full text-sm font-medium shadow-md">
            {country}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1 group-hover:text-brand-blue transition-colors duration-300">{name}</h3>
          <p className="text-brand-purple font-medium mb-3">{title}</p>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
