
import { Linkedin, Instagram, Youtube, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <a 
        href="https://www.linkedin.com/in/carlosramosfuentes/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" className="rounded-full">
          <Linkedin size={20} />
        </Button>
      </a>
      
      <a 
        href="https://www.instagram.com/carloscoordinator" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" className="rounded-full">
          <Instagram size={20} />
        </Button>
      </a>
      
      <a 
        href="https://www.youtube.com/@carloscoordinator" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" className="rounded-full">
          <Youtube size={20} />
        </Button>
      </a>
      
      <a 
        href="https://www.tiktok.com/@carloscoordinator" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" className="rounded-full">
          <Music size={20} className="transform rotate-45" /> {/* Music icon rotated to look more like TikTok */}
        </Button>
      </a>
    </div>
  );
};
