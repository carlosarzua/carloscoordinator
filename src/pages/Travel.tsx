
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Travel = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-brand-lightblue via-[#FAF4EC] to-brand-purple/10">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="container-custom">
            <div className="text-center py-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("travelTitle")}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("travelDescription")}</p>
            </div>
            {/* Top wide box */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-gray-600 text-lg text-center">
              I share tips and offer services regarding staying for cheap, incredible adventures in Japan, what to do, including partnernships with other agencies, and advice for long term travelers and digital nomads.
              <br />
              I also offer paid services for customized plans, finding accomodation in cheaper ways that would require you to speak Japanese (but I would handle that for the client).
            </div>
            {/* Three horizontal boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Travel to Japan</h2>
                <p className="text-gray-600 mb-4 flex-1">
                  Advice for travel, finding accommodation, insider tips for Japanese adventures.
                </p>
                <Link to="/contact" className="btn-primary inline-block mt-auto">
                  Contact for Services
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Travel to the Himalayas</h2>
                <p className="text-gray-600 mb-4 flex-1">
                  I am a brand ambassador for Himalaya Explore Line, where I climbed the Himalayas in March 2025.
                  Read about my adventure in my LinkedIn newsletter!
                </p>
                <a
                  href="https://www.linkedin.com/newsletters/my-narrow-road-to-the-interior-7148990295269855232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-auto"
                >
                  My Narrow Road to the Interior
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Travel to Spain</h2>
                <p className="text-gray-600 mb-4 flex-1">
                  Planning trips to Spain, local experiences, hiking, cultural recommendations and more.
                </p>
                <Link to="/contact" className="btn-primary inline-block mt-auto">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Travel;

