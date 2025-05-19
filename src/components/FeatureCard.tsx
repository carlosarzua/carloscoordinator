
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-xl card-hover">
      <div className="bg-brand-blue bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-brand-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
