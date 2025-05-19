import { MarqueeItem } from "./MarqueeItem";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceListProps {
  items: any[];
}

export const ResourceList = ({ items }: ResourceListProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  // Show 2 on mobile, 4 on desktop
  const itemsPerView = isMobile ? 2 : 4;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxScroll = Math.max(0, items.length - itemsPerView);

  const scrollLeft = () => setScrollPosition(Math.max(0, scrollPosition - 1));
  const scrollRight = () => setScrollPosition(Math.min(maxScroll, scrollPosition + 1));

  return (
    <div className="relative max-w-full">
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          disabled={scrollPosition === 0}
          className="mr-4"
        >
          <ArrowLeft size={20} />
        </Button>
        <div className="flex overflow-x-auto">
          {items
            .slice(scrollPosition, scrollPosition + itemsPerView)
            .map((item, index) => (
              <div key={index} className="px-2 min-w-[250px] max-w-[340px] w-full">
                <MarqueeItem
                  type={item.type}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  comingSoon={item.comingSoon}
                  image={item.image}
                  actions={item.actions}
                />
              </div>
            ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollRight}
          disabled={scrollPosition >= maxScroll}
          className="ml-4"
        >
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};
