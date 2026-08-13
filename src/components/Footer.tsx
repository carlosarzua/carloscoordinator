
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Youtube, Instagram, Music, BookOpen, Briefcase, Globe } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-brand-dark to-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">CarlosCoordinator.com</h3>
            <p className="text-gray-300 mb-4">
              {t("footerTagline")}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/carlosramosfuentes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 transform">
                <Linkedin size={24} />
              </a>
              <a href="https://www.youtube.com/@carloscoordinator" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 transform">
                <Youtube size={24} />
              </a>
              <a href="https://www.instagram.com/carloscoordinator" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 transform">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@carloscoordinator" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 transform">
                <Music size={24} className="transform rotate-45" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t("navHeading")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-2">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/radical" className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-2">
                  <BookOpen size={16} />
                  Radical
                </Link>
              </li>
              <li>
                <a href="https://japanintern.net" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-2">
                  <Briefcase size={16} />
                  JapanIntern.Net
                </a>
              </li>
              <li>
                <Link to="/travel" className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-2">
                  <Globe size={16} />
                  {t("travel")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t("ourApps")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/radical" className="text-gray-300 hover:text-white transition duration-200">
                  Radical
                </Link>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/jp/app/keigo-pro/id6760846155?l=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  Keigo Pro
                </a>
              </li>
              <li>
                <span className="text-gray-300">Hiragana Hero</span>
                <span className="ml-2 text-xs bg-brand-orange px-2 py-0.5 rounded-full">{t("comingSoonShort")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t("contact")}</h4>
            <address className="text-gray-300 not-italic">
              <p>carlosarzua@usal.es</p>
            </address>
            <div className="mt-4">
              <a href="#booking" className="inline-block bg-brand-blue hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-lg transition duration-200" onClick={e => {
                e.preventDefault();
                const b = document.getElementById("booking");
                if (b) b.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/#booking";
              }}>
                {t("bookLesson")}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CarlosCoordinator. {t("rightsReserved")}</p>
          {/* Remove privacy/terms links */}
        </div>
      </div>
    </footer>
  );
};
