import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeacherCard } from "@/components/TeacherCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MarqueeItem } from "@/components/MarqueeItem";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowRight, ChevronDown, Star, Linkedin, GraduationCap } from "lucide-react";
import LazyLoad from "react-lazyload";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/CarlosCoordinator/@42.9260845,-8.1571553,17z/data=!4m8!3m7!1s0xd2e4bdaf93a733f:0xffa3ce5c891b1116!8m2!3d42.9260845!4d-8.1545804!9m1!1b1!16s%2Fg%2F11lsgtww0d!5m1!1e1";

const RESOURCES_INITIAL = 8;

// Companies & institutions where Carlos's students work / study (from CV).
const companies = [
  "Rakuten",
  "Dentsu",
  "Accenture",
  "Boston Consulting Group",
  "Bottega Veneta",
  "Ajinomoto",
  "Vimeo",
  "Yazaki Europe",
  "García Carrión Japan",
  "Expo 2025 Osaka",
  "ICMG Group",
  "VectorRenewables Japan",
  "Ikeuchi Europe",
  "Amuse",
  "Design Thinking Japan",
  "Spanish Chamber of Commerce in Japan",
  "Spain Men's National Basketball Team",
  "Alvark Tokyo",
  "University of Salamanca",
  "University of Murcia",
  "Edge Hill University",
  "University of Liverpool",
];

const Index = () => {
  const { t } = useLanguage();
  const [activeLabel, setActiveLabel] = useState<string>("all");
  const [showAllResources, setShowAllResources] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  // Scroll to the booking section when arriving via /#booking from another page.
  // Retry a few times so a late browser scroll-restoration can't reset us to the top.
  useEffect(() => {
    if (window.location.hash !== "#booking") return;
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const scroll = () =>
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    const timers = [150, 500, 1000, 1600].map((d) => window.setTimeout(scroll, d));
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, []);

  const filters = [
    { key: "all", labelKey: "filterAll" },
    { key: "read", labelKey: "filterRead" },
    { key: "study", labelKey: "filterStudy" },
    { key: "watch", labelKey: "filterWatch" },
    { key: "travel", labelKey: "filterTravel" },
    { key: "work", labelKey: "filterWork" },
  ];

  const changeFilter = (key: string) => {
    setActiveLabel(key);
    setShowAllResources(false);
  };

  const mediaItems = [
    { type: "Interview", title: t("interview1Title"), description: t("interview1Desc"), link: "https://www.youtube.com/watch?v=1Vf71y4BZ0k", actions: ["watch", "study"] },
    { type: "Interview", title: t("interview2Title"), description: t("interview2Desc"), link: "https://www.youtube.com/watch?v=HxCsR2Y8dAk", actions: ["watch", "study"] },
    { type: "Book", title: t("bashoTitle"), description: t("bashoDescription"), link: "https://www.quaterni.es/producto/basho-maestro-del-haiku/", actions: ["read"], image: "/images/books/basho.jpg" },
    { type: "Book", title: t("jlptBookTitle"), description: t("jlptBookDescription"), link: "#", comingSoon: true, actions: ["read", "study"], image: "/images/books/jlpt-n5.jpg" },
    { type: "App", title: "Radical", description: t("radicalCardDesc"), actions: ["study"], image: "/images/apps/radical.png", storeLinks: { web: "/radical", ios: "https://apps.apple.com/us/app/radical-kanji-dictionary/id6760137001", android: "https://play.google.com/store/apps/details?id=com.kanji.radical" } },
    { type: "App", title: "Keigo Pro", description: t("keigoCardDesc"), actions: ["study"], image: "/images/apps/keigo.png", storeLinks: { ios: "https://apps.apple.com/jp/app/keigo-pro/id6760846155?l=en-US", android: "https://play.google.com/store/apps/details?id=com.carlosarzua.keigopro" } },
    { type: "App", title: "Hiragana Hero", description: t("hiraganaCardDesc"), link: "#", comingSoon: true, actions: ["study"], image: "/images/apps/hiragana-hero.png" },
    { type: "Resource", title: "JapanIntern.Net", description: t("internCardDesc"), link: "https://japanintern.net", actions: ["study", "work"], image: "/images/resources/japanintern.png" },
    { type: "Resource", title: t("travelJapanTitle"), description: t("travelJapanDescription"), link: "/travel", actions: ["travel"], image: "/images/resources/japan-travel.jpg" },
    { type: "Resource", title: t("travelHimalayasTitle"), description: t("travelHimalayasDescription"), link: "/travel", actions: ["travel"], image: "/images/resources/himalaya.jpg" },
    { type: "Resource", title: t("travelSpainTitle"), description: t("travelSpainDescription"), link: "/travel", actions: ["travel"], image: "/images/resources/spain.jpg" },
    { type: "Resource", title: "My Narrow Road to the Interior", description: t("narrowRoadDescription"), link: "https://www.linkedin.com/newsletters/my-narrow-road-to-the-interior-7148990295269855232/", actions: ["read", "travel"], image: "/images/resources/narrow-road.jpg" },
    { type: "Video", title: "JLPT N1 Comprehension", description: t("jlptN1CompDesc"), link: "https://youtu.be/F0ctfIuXKHQ", actions: ["watch", "study", "read"] },
    { type: "Video", title: "JLPT N2 Comprehension", description: t("jlptN2CompDesc"), link: "https://youtu.be/pgfeChjsuls", actions: ["watch", "study", "read"] },
    { type: "Video", title: "JLPT N3 Comprehension", description: t("jlptN3CompDesc"), link: "https://youtu.be/HzyIrcqMO64", actions: ["watch", "study", "read"] },
    { type: "Playlist", title: "Japanese from Scratch", description: t("jpsScratchDesc"), link: "https://www.youtube.com/playlist?list=PLGCwMMj881LjYEehR787n3Nm3u2cHJXuY", actions: ["watch", "study"] },
    { type: "Playlist", title: "Japonés desde cero", description: t("jpDesdeCeroDesc"), link: "https://www.youtube.com/watch?v=j53EwXyAS3Q&list=PLGCwMMj881Lg-vS8B7L0Yef9V21jQDfoy", actions: ["watch", "study"] },
    { type: "ShortVideo", title: t("beNiceTitle"), description: t("beNiceDesc"), link: "https://youtube.com/shorts/R-SyW8U3eec?feature=share", actions: ["watch"] },
    { type: "Series", title: "Tokyo Tales: Agent Carlos Learns Japanese", description: t("tokyoTalesDesc"), link: "https://www.youtube.com/playlist?list=PLGCwMMj881LhpqIHpYXvQ429kQscSI-4a", actions: ["watch"] },
  ];

  const filteredItems =
    activeLabel === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.actions && item.actions.includes(activeLabel));
  const visibleItems = showAllResources ? filteredItems : filteredItems.slice(0, RESOURCES_INITIAL);
  const hiddenCount = filteredItems.length - RESOURCES_INITIAL;

  // Real reviews from Google + Play. Add more here as they come in.
  const reviews = [
    { name: "Rachel", date: "Apr 2025", rating: 5, content: "Carlos helped me pass the N1!!! Such an amazing teacher, would highly recommend to anyone!" },
    { name: "Jay Bevilacqua Kawauchi", date: "Aug 2022", rating: 5, content: "In half a year, Carlos helped me boost my language skills and guided me through the JLPT N2 exam, which I passed! Learning radicals through thorough explanations and a consistent exam strategy improved my fluency. Cannot recommend him enough, especially as an adult working full time." },
    { name: "Nathan Davies", date: "Jan 2022", rating: 5, content: "A lot of my teachers had given up on me. Since I started with Carlos and Eiko, I've achieved my dream of attending university. They provide expert knowledge, and each lesson is tailored to my individual needs and interests." },
    { name: "María Bauçà Cerro", date: "Mar 2024", rating: 5, content: "Carlos es un gran profesor que recomiendo altamente. He recibido clases de preparación para el N1: es sorprendente todo el conocimiento que posee del idioma y, al recibir las clases en español, se avanza en el aprendizaje de una manera muy ágil." },
    { name: "Adolfo Gastalver Rubio", date: "Jan 2022", rating: 5, content: "¡Las clases de japonés con Carlos son geniales! Se adaptan rápidamente a tu nivel. En medio año me ha ayudado a recuperar lo que daba por olvidado y a lanzarme al nivel del Noken N2." },
    { name: "Hélène Nem-Kurisu", date: "Jan 2021", rating: 5, content: "Personne à l'écoute et méthodes d'enseignement à la pointe ! Je recommande." },
  ];

  const teachers = [
    { name: "Eiko", title: t("eikoTitle"), description: t("eikoDesc"), country: "Japan", flag: "🇯🇵" },
    { name: "Caolan", title: t("caolanTitle"), description: t("caolanDesc"), country: "Ireland", flag: "🇮🇪" },
    { name: "Yulu", title: t("yuluTitle"), description: t("yuluDesc"), country: "China", flag: "🇨🇳" },
  ];

  return (
    <>
      <Navbar />

      {/* Top section: hero + proof (reviews & where students work) */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-slate-50 border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">{t("heroEyebrow")}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-5">
              {t("heroTitle2")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{t("heroLead")}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#booking" className="btn-primary">
                {t("bookTrialButton")}
                <ArrowRight size={18} />
              </a>
              <a href="#testimonials" className="btn-outline">
                {t("seeReviewsButton")}
                <Star size={18} />
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand-dark transition-colors">
                <Star size={16} className="text-brand-yellow fill-brand-yellow" />
                <span className="font-semibold text-brand-dark">5.0</span> {t("trustGoogle")}
              </a>
              <span className="inline-flex items-center gap-2">
                <Linkedin size={16} className="text-brand-blue" />
                <span className="font-semibold text-brand-dark">17,000+</span> {t("trustLinkedIn")}
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap size={16} className="text-brand-purple" />
                {t("trustYears")}
              </span>
            </div>
          </div>

          {/* Proof block — continuous with the hero */}
          <div className="mt-10" id="testimonials">
            <div className="flex items-center gap-3 sm:gap-5 mb-12">
              <p className="shrink-0 whitespace-nowrap text-xs font-medium text-muted-foreground">
                {t("studentsWorkAt")}
              </p>
              <div className="marquee-mask overflow-hidden flex-1 min-w-0">
                <div className="marquee-track hover:[animation-play-state:paused]">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                      {companies.map((c) => (
                        <span
                          key={c}
                          className="mx-2 whitespace-nowrap text-brand-dark font-semibold text-sm bg-white border border-border rounded-full px-4 py-2"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">{t("testimonials")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-8">
              {reviews.map((r, i) => (
                <TestimonialCard key={i} name={r.name} content={r.content} rating={r.rating} date={r.date} />
              ))}
            </div>

            <div className="text-center">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {t("viewAllReviews")} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow">{t("resourcesEyebrow")}</span>
            <h2 className="text-2xl md:text-3xl font-bold">{t("resourcesHeading")}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => changeFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  activeLabel === f.key
                    ? "bg-brand-blue text-white border-brand-blue"
                    : "bg-white text-brand-dark border-border hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visibleItems.map((item, index) => (
              <MarqueeItem
                key={index}
                type={item.type}
                title={item.title}
                description={item.description}
                link={item.link}
                comingSoon={item.comingSoon}
                image={item.image}
                storeLinks={item.storeLinks}
              />
            ))}
          </div>

          {hiddenCount > 0 && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAllResources((v) => !v)} className="btn-outline">
                {showAllResources ? t("showLess") : `${t("showMore")} (+${hiddenCount})`}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showAllResources ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-muted-foreground">{t("followAlong")}</p>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section bg-slate-50 border-y border-border" id="booking">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("bookLesson")}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("bookLesson")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("bookLessonSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
              <div className="bg-brand-blue p-3">
                <h3 className="text-lg font-bold text-white text-center">{t("bookTrialJapanese")}</h3>
              </div>
              <div className="bg-white">
                <LazyLoad height={966} offset={100}>
                  <iframe
                    src="https://zcal.co/i/ulPXELUk?embed=1&embedType=iframe"
                    frameBorder="0"
                    className="zcal-embed w-full h-[966px]"
                    id="zcal-invite-japanese"
                    title="Japanese Assessment/Free Trial Booking"
                    allow="calendar"
                    loading="lazy"
                  ></iframe>
                </LazyLoad>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
              <div className="bg-brand-purple p-3">
                <h3 className="text-lg font-bold text-white text-center">{t("bookTrialOther")}</h3>
              </div>
              <div className="bg-white">
                <LazyLoad height={884} offset={100}>
                  <iframe
                    src="https://zcal.co/i/3giIaiX8?embed=1&embedType=iframe"
                    frameBorder="0"
                    className="zcal-embed w-full h-[884px]"
                    id="zcal-invite-language"
                    title="Discovery Call for English, Spanish, and Chinese"
                    allow="calendar"
                    loading="lazy"
                  ></iframe>
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Carlos */}
      <section className="section bg-white" id="about">
        <div className="container-custom">
          <div className={`grid gap-10 items-center ${photoError ? "" : "md:grid-cols-2"}`}>
            {!photoError && (
              <figure className="mx-auto w-full max-w-md">
                <img
                  src="/images/carlos.jpg"
                  alt="Carlos teaching and travelling in Japan"
                  onError={() => setPhotoError(true)}
                  className="w-full rounded-2xl object-cover shadow-sm border border-border"
                />
              </figure>
            )}
            <div className={photoError ? "max-w-3xl mx-auto text-center" : ""}>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">{t("meetCarlos")}</h2>
              <p className="text-brand-blue font-semibold mb-5">{t("meetCarlosRole")}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("meetCarlosP1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("meetCarlosP2")}</p>
              <a href="#booking" className={`btn-primary ${photoError ? "mx-auto" : ""}`}>
                {t("bookTrialButton")} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section bg-slate-50 border-y border-border" id="teachers">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("meetOurTeachers")}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("meetOurTeachers")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("teachersSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.name}
                name={teacher.name}
                title={teacher.title}
                description={teacher.description}
                country={teacher.country}
                flag={teacher.flag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* JapanIntern Banner */}
      <section className="py-12 bg-[rgb(239,210,180)] text-brand-dark">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">JapanIntern.Net</h2>
            <p className="text-lg max-w-2xl">{t("japanInternBannerDesc")}</p>
          </div>
          <a href="https://japanintern.net" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-brand-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-dark/90 transition-colors">
            {t("japanInternBannerCta")}
          </a>
        </div>
      </section>

      {/* Radical Banner */}
      <section className="py-12 bg-brand-dark text-white">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Radical <sup className="text-xs align-super">™</sup>
            </h2>
            <p className="text-lg max-w-2xl text-slate-200">{t("radicalBannerDesc")}</p>
          </div>
          <a href="/radical" className="shrink-0 bg-brand-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-blue/90 transition-colors">
            {t("radicalBannerCta")}
          </a>
        </div>
      </section>

      {/* N1-N2 Course Banner */}
      <section className="py-12 bg-brand-purple text-white">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{t("n1n2BannerTitle")}</h2>
            <p className="text-lg max-w-2xl text-purple-50">{t("n1n2BannerDesc")}</p>
          </div>
          <a href="/n1n2-course" className="shrink-0 bg-brand-yellow text-brand-dark font-semibold py-3 px-6 rounded-lg hover:bg-brand-yellow/90 transition-colors">
            {t("n1n2BannerCta")}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
