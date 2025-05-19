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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center">
              <h1 className="text-3xl md:text-4xl font-bold flex-shrink-0">Radical <sup className="text-sm">TM</sup></h1>
              <a
                href="https://play.google.com/store/apps/details?id=com.kanji.radical&hl=en-US&ah=ejWzuWh6tr3x23-1q2izut3QM1o"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <Smartphone size={24} />
                Get it on Google Play
              </a>
            </div>
          </div>
          <p className="text-gray-600 mb-1">
            {t("radicalNewDesc")}
          </p>
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
