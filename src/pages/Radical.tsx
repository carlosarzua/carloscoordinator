import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Radical = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // This is where you would load the existing Radical app in an iframe
    // or redirect to the current Radical app
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="container-custom py-4">
        </div>
        
        <iframe
          src="https://carlosarzua.github.io/kanji-dictionary/"
          title="Radical Dictionary"
          className="w-full h-[calc(100vh-220px)] border-none"
        />
      </div>
      <Footer />
    </>
  );
};

export default Radical;
