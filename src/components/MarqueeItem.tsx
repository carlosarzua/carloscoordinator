import { ReactNode } from "react";
import { Book, Smartphone, FileText, Video, Youtube, Film, ListVideo } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ResourceActionButtons } from "./ResourceActionButtons";
import { ResourceMediaPreview } from "./ResourceMediaPreview";

interface MarqueeItemProps {
  type: string;
  title: string;
  description: string;
  link?: string;
  comingSoon?: boolean;
  image?: string;
  actions?: string[];
}
export const MarqueeItem = ({
  type,
  title,
  description,
  link,
  comingSoon = false,
  image,
  actions = []
}: MarqueeItemProps) => {
  const { t } = useLanguage();

  const getIcon = (): ReactNode => {
    switch (type) {
      case "Book":
        return <Book size={24} className="text-brand-blue" />;
      case "App":
        return <Smartphone size={24} className="text-brand-purple" />;
      case "Resource":
        return <FileText size={24} className="text-brand-green" />;
      case "Video":
        return <Video size={24} className="text-brand-red" />;
      case "Playlist":
        return <ListVideo size={24} className="text-brand-yellow" />;
      case "ShortVideo":
        return <Film size={24} className="text-brand-orange" />;
      case "Series":
        return <Youtube size={24} className="text-brand-red" />;
      default:
        return null;
    }
  };

  // Fix: Always show border (even on hover)
  const boxContent = (
    <div className="fun-card mx-3 bg-white inline-flex flex-col min-w-[250px] max-w-[340px] w-full h-[340px] relative transition-all duration-300 hover:shadow-lg group overflow-hidden border-2 border-brand-blue hover:border-brand-blue">
      <div className="flex items-center gap-2 mb-1 h-8">
        {getIcon()}
        <span className="text-sm font-bold uppercase text-gray-500">{type}</span>
      </div>
      <h3 className="text-base font-bold mb-1 line-clamp-3">{title}</h3>
      <div className="mb-2 w-full">
        <ResourceMediaPreview type={type} link={link || ""} image={image} />
      </div>
      <div className="text-sm text-gray-600 line-clamp-3 mb-2">{description}</div>
      <div className="mt-auto">
        <ResourceActionButtons actions={actions || []} />
      </div>
      {comingSoon && (
        <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-md">
          {t("comingSoon")}
        </div>
      )}
    </div>
  );

  if (link && link !== "#") {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline block">
        {boxContent}
      </a>
    );
  }
  return boxContent;
};
