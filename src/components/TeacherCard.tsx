import { ReactNode } from "react";

interface TeacherCardProps {
  name: string;
  title: string;
  description: string;
  country: string;
  flag?: string;
  children?: ReactNode;
}

export const TeacherCard = ({
  name,
  title,
  description,
  country,
  flag,
  children,
}: TeacherCardProps) => {
  return (
    <div className="h-full rounded-xl bg-white border border-border shadow-sm p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-blue/40">
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-bold text-lg">
          {name.charAt(0).toUpperCase()}
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-slate-50 border border-border rounded-full px-2.5 py-1">
          {flag && <span aria-hidden>{flag}</span>}
          {country}
        </span>
      </div>
      <h3 className="text-lg font-bold text-brand-dark mb-1">{name}</h3>
      <p className="text-brand-blue text-sm font-semibold mb-3">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  );
};
