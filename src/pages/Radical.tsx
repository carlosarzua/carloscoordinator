import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Apple, Play } from "lucide-react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.kanji.radical";
const IOS_URL = "https://apps.apple.com/us/app/radical-kanji-dictionary/id6760137001";

// Real Google Play / App Store reviews for Radical.
const radicalReviews = [
  { name: "Alex_Creeper", date: "Feb 2026", rating: 5, content: "It is a gamechanger for Japanese learners!" },
  { name: "Sofía Lacasta", date: "Aug 2025", rating: 5, content: "The app helped me so much to learn kanji better. The phonetic radical function is great and one of a kind!" },
  { name: "Cesc Andreu", date: "Jul 2025", rating: 5, content: "Complete and super useful for practising for the Noken — or simply for those of us who like kanji!" },
  { name: "Juan Ramos", date: "Sep 2025", rating: 5, content: "Amazing app. It's been very helpful for me in understanding kanji." },
  { name: "Alicia", date: "Aug 2025", rating: 5, content: "It's a very easy-to-use tool. Absolutely essential!" },
  { name: "Marina Velez Miranda", date: "Aug 2025", rating: 5, content: "Amazing for learning kanji!" },
];

const Radical = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      {/* The dictionary fills the viewport below the navbar and scrolls
          internally; the reviews and footer sit below, reachable by scrolling. */}
      <iframe
        src="https://carlosarzua.github.io/kanji-dictionary/"
        title="Radical Dictionary"
        className="block w-full border-0 mt-20 h-[calc(100dvh-5rem)]"
      />

      {/* Radical reviews */}
      <section className="section bg-slate-50 border-t border-border">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("radicalReviewsEyebrow")}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">{t("radicalReviewsTitle")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Apple size={16} /> App Store
              </a>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <Play size={16} /> Google Play
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {radicalReviews.map((r, i) => (
              <TestimonialCard key={i} name={r.name} content={r.content} rating={r.rating} date={r.date} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Radical;
