
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-brand-blue">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <Link to="/" className="btn-primary">
          {t("home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
