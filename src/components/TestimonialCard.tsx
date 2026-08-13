import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  content: string;
  rating: number;
  date: string;
}

export const TestimonialCard = ({ name, content, rating, date }: TestimonialCardProps) => {
  return (
    <div className="h-full bg-white rounded-xl border border-border shadow-sm p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-11 h-11 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center mr-3">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="font-bold text-brand-dark leading-tight">{name}</h4>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
      </div>
      <div className="flex items-center mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-brand-yellow fill-brand-yellow" : "text-slate-200 fill-slate-200"}
            />
          ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
};
