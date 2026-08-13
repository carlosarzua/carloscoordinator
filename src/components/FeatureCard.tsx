
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="h-full bg-white rounded-xl border border-border shadow-sm p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="bg-brand-blue/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-brand-blue">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
