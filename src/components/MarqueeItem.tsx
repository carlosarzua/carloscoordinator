import { ReactNode } from "react";
import {
  Book,
  Smartphone,
  FileText,
  Video,
  Youtube,
  Film,
  ListVideo,
  Apple,
  Play,
  Globe,
  ArrowRight,
  Trophy,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ResourceMediaPreview } from "./ResourceMediaPreview";

export interface StoreLinks {
  ios?: string;
  android?: string;
  web?: string;
}

interface MarqueeItemProps {
  type: string;
  title: string;
  description: string;
  link?: string;
  comingSoon?: boolean;
  image?: string;
  storeLinks?: StoreLinks;
}

const iconByType: Record<string, ReactNode> = {
  Interview: <Trophy size={15} />,
  Book: <Book size={15} />,
  App: <Smartphone size={15} />,
  Resource: <FileText size={15} />,
  Video: <Video size={15} />,
  Playlist: <ListVideo size={15} />,
  ShortVideo: <Film size={15} />,
  Series: <Youtube size={15} />,
};

const typeLabel: Record<string, string> = {
  ShortVideo: "Short video",
  Interview: "Success story",
};

export const MarqueeItem = ({
  type,
  title,
  description,
  link,
  comingSoon = false,
  image,
  storeLinks,
}: MarqueeItemProps) => {
  const { t } = useLanguage();

  const pill =
    "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md transition-colors";
  const pillPrimary = `${pill} bg-brand-blue text-white hover:bg-brand-blue/90`;
  const pillGhost = `${pill} border border-border text-brand-dark hover:border-brand-blue hover:text-brand-blue`;

  const ctaLabel =
    type === "Book"
      ? t("ctaRead")
      : type === "Video" || type === "Playlist" || type === "Series" || type === "ShortVideo" || type === "Interview"
      ? t("ctaWatch")
      : t("ctaOpen");

  const hasStore = storeLinks && (storeLinks.ios || storeLinks.android || storeLinks.web);

  return (
    <div className="fun-card flex flex-col h-full relative">
      {(image || (link && (link.includes("youtube") || link.includes("youtu.be")))) && (
        <div className="mb-4">
          <ResourceMediaPreview type={type} link={link || ""} image={image} />
        </div>
      )}

      <div className="flex items-center gap-1.5 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {iconByType[type]}
        <span>{typeLabel[type] || type}</span>
      </div>

      <h3 className="text-base font-bold text-brand-dark mb-1.5 leading-snug line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{description}</p>

      <div className="mt-auto flex flex-wrap gap-2">
        {hasStore ? (
          <>
            {storeLinks?.web && (
              <a href={storeLinks.web} className={pillPrimary}>
                <Globe size={14} /> {t("ctaOpen")}
              </a>
            )}
            {storeLinks?.ios && (
              <a href={storeLinks.ios} target="_blank" rel="noopener noreferrer" className={pillGhost}>
                <Apple size={14} /> App Store
              </a>
            )}
            {storeLinks?.android && (
              <a href={storeLinks.android} target="_blank" rel="noopener noreferrer" className={pillGhost}>
                <Play size={14} /> Google Play
              </a>
            )}
          </>
        ) : comingSoon || !link || link === "#" ? null : (
          <a
            href={link}
            target={link.startsWith("/") ? undefined : "_blank"}
            rel={link.startsWith("/") ? undefined : "noopener noreferrer"}
            className={pillPrimary}
          >
            {ctaLabel} <ArrowRight size={14} />
          </a>
        )}
      </div>

      {comingSoon && (
        <div className="absolute top-3 right-3 bg-brand-yellow text-brand-dark text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
          {t("comingSoon")}
        </div>
      )}
    </div>
  );
};
