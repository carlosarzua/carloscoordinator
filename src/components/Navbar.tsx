import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { DynamicLanguagePrompt } from "./DynamicLanguagePrompt";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const goToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
    if (isMobile) setIsMenuOpen(false);
  };

  const navButtonClass =
    "flex flex-col items-center justify-center w-full px-2 py-1 rounded-lg font-semibold text-xs leading-tight bg-white transition duration-200 hover:scale-105 h-[44px] md:px-4 md:py-2 md:text-sm md:h-[70px]";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-1"
          : "py-3 bg-white bg-opacity-95 backdrop-blur-md"
      }`}
    >
      <div className="container-custom flex flex-wrap md:flex-nowrap justify-between items-center min-h-[64px]">
        {/* Desktop logo */}
        <Link
          to="/"
          className="hidden md:flex text-xl font-bold gradient-text leading-none text-left items-center min-h-[64px]"
          style={{ whiteSpace: "pre-line", lineHeight: "1" }}
        >
          Carlos{"\n"}Coordinator
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center min-h-[64px]">
          <Link
            to="/radical"
            className={navButtonClass}
            style={{ backgroundColor: "#000", color: "#00b4d8" }}
          >
            <span
              className="text-base font-bold leading-tight"
              style={{ color: "#00b4d8" }}
            >
              Radical
            </span>
            <span
              className="text-xs font-normal leading-tight"
              style={{ color: "#90e0ef" }}
            >
              JP-EN Dictionary
            </span>
          </Link>
          <Link
            to="/n1n2-course"
            className={navButtonClass}
            style={{ backgroundColor: "#7c3aed", color: "#fff" }}
          >
            <span className="text-base font-bold leading-tight">
              N1-N2 Course
            </span>
            <span className="text-xs font-normal leading-tight">
              Pass the JLPT
            </span>
          </Link>
          <a
            href="https://japanintern.net"
            target="_blank"
            rel="noopener noreferrer"
            className={navButtonClass}
            style={{ backgroundColor: "rgb(239,210,180)", color: "black" }}
          >
            <span className="text-base font-bold leading-tight">
              JapanIntern.Net
            </span>
            <span className="text-xs font-normal leading-tight">
              Intern in Japan
            </span>
          </a>
          <Link
            to="/travel"
            className={navButtonClass}
            style={{
              backgroundColor: "#00b4d8",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <span className="text-base font-bold leading-tight block w-full">
              Travel to Japan
            </span>
            <span
              className="text-xs font-normal leading-tight block w-full"
              style={{ color: "#fff" }}
            >
              the Himalayas & Spain
            </span>
          </Link>
          <div className="flex flex-col items-center ml-2">
            <DynamicLanguagePrompt />
            <LanguageSelector />
          </div>
          <button className="btn-primary ml-2" onClick={goToBooking}>
            {t("bookLesson")}
          </button>
        </nav>

        {/* Mobile top row */}
        <div className="flex md:hidden flex-col w-full">
          <div className="flex flex-row items-center justify-between w-full px-2" style={{ minHeight: 48 }}>
            <Link
              to="/"
              className="text-xl font-bold gradient-text leading-none"
              style={{ whiteSpace: "pre-line", lineHeight: "1" }}
            >
              Carlos{"\n"}Coordinator
            </Link>
            <div className="flex items-center gap-2">
              <DynamicLanguagePrompt />
              <LanguageSelector />
              <button onClick={toggleMenu}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile menu with animation */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-2 w-full mt-2 place-items-center px-2">
              <Link
                to="/radical"
                className={navButtonClass}
                style={{ backgroundColor: "#000", color: "#00b4d8" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-base font-bold leading-tight" style={{ color: "#00b4d8" }}>
                  Radical
                </span>
              </Link>
              <Link
                to="/n1n2-course"
                className={navButtonClass}
                style={{ backgroundColor: "#7c3aed", color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-base font-bold leading-tight">
                  N1-N2 Course
                </span>
              </Link>
              <a
                href="https://japanintern.net"
                target="_blank"
                rel="noopener noreferrer"
                className={navButtonClass}
                style={{ backgroundColor: "rgb(239,210,180)", color: "black" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-base font-bold leading-tight">
                  JapanIntern.Net
                </span>
              </a>
              <Link
                to="/travel"
                className={navButtonClass}
                style={{
                  backgroundColor: "#00b4d8",
                  color: "#fff",
                  textAlign: "center",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-base font-bold leading-tight block w-full">
                  Travel to Japan
                </span>
              </Link>
            </div>
            <div className="flex items-center mt-2 w-full justify-center px-4 pb-4">
              <button
                className="btn-primary w-full max-w-[200px]"
                onClick={goToBooking}
              >
                {t("bookLesson")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
