import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeacherCard } from "@/components/TeacherCard";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Faq } from "@/components/Faq";
import { MarqueeItem } from "@/components/MarqueeItem";
import { ResourceFilter } from "@/components/ResourceFilter";
import { ResourceList } from "@/components/ResourceList";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowRight, Book, Smartphone, Globe, User } from "lucide-react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Index = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"All" | "Books" | "Apps" | "Resources" | "Videos" | "Playlist" | "ShortVideo" | "Series">("All");
  const [activeLabel, setActiveLabel] = useState<string>("all");

  // Labels for filter and translation keys
  const resourceLabels = [
    { key: "all", label: "all" },
    { key: "read", label: "read" },
    { key: "study", label: "study" },
    { key: "watch", label: "watch" },
    { key: "travel", label: "travel" },
    { key: "work", label: "work" },
  ];

  // For translation of resource titles -- example usage
  const mediaItems = [
    { type: "Book", title: t("bashoTitle") || "Basho. Maestro del haiku", description: t("bashoDescription") || "First biography ever of the poet who invented haiku in Spanish", link: "https://www.quaterni.es/producto/basho-maestro-del-haiku/", actions: ["read"], image: "/images/books/basho.jpg" },
    { type: "Book", title: t("jlptBookTitle") || "JLPT N5 Kanji", description: t("jlptBookDescription") || "To be published in 2025", link: "#", comingSoon: true, actions: ["read", "study"], image: "/images/books/jlpt-n5.jpg" },
    { type: "App", title: "Radical", description: t("radicalDescription") || "EN-JP Online Dictionary to boost kanji and vocab acquisition. Available on Google Play", link: "/radical", actions: ["study"], image: "/images/apps/radical.png" },
    { type: "App", title: t("keigoTitle"), description: t("keigoDescription") || "App to effectively learn the tricky honorifics of Japanese. Soon to be released on Google Play", link: "#", comingSoon: true, actions: ["study"], image: "/images/apps/keigo.png" },
    { type: "App", title: "Hiragana Hero", description: t("hiraganaDescription") || "App to learn hiragana and katakana using easy-to-remember hints and mnemonics", link: "#", comingSoon: true, actions: ["study"], image: "/images/apps/hiragana-hero.png" },
    { type: "Resource", title: "JapanIntern.Net", description: t("internDescription") || "Find the internship of your dreams in Japan", link: "https://japanintern.net", actions: ["study", "work"], image: "/images/resources/japanintern.png" },
    { type: "Resource", title: t("travelJapanTitle"), description: t("travelJapanDescription") || "Help me create the trip of your dreams in Japan, including finding cheap accommodation, paragliding in Mt. Fuji, zazen temple meditation", link: "/travel", actions: ["travel"], image: "/images/resources/japan-travel.jpg" },
    { type: "Resource", title: t("travelHimalayasTitle"), description: t("travelHimalayasDescription") || "Find the best adventure 5,000 m over sea level, hike until you find your true self, and meditate where Buddhism was born", link: "/travel", actions: ["travel"], image: "/images/resources/himalaya.jpg" },
    { type: "Resource", title: t("travelSpainTitle"), description: t("travelSpainDescription") || "Find adventure, hiking, and culture in Spain", link: "/travel", actions: ["travel"], image: "/images/resources/spain.jpg" },
    { type: "Resource", title: "My Narrow Road to the Interior", description: t("narrowRoadDescription") || "Newsletter of my travel of 2,200 km across rural Japan, reenacting Matsuo Basho's 1689 trip", link: "https://www.linkedin.com/newsletters/my-narrow-road-to-the-interior-7148990295269855232/", actions: ["read", "travel"], image: "/images/resources/narrow-road.jpg" },
    { type: "Video", title: t("jlptN1CompTitle") || "JLPT N1 Comprehension", description: t("jlptN1CompDesc") || "Detailed guide to mastering JLPT N1 reading comprehension", link: "https://youtu.be/F0ctfIuXKHQ", actions: ["watch", "study", "read"] },
    { type: "Video", title: t("jlptN2CompTitle") || "JLPT N2 Comprehension", description: t("jlptN2CompDesc") || "Comprehensive strategies for JLPT N2 reading section", link: "https://youtu.be/pgfeChjsuls", actions: ["watch", "study", "read"] },
    { type: "Video", title: t("jlptN3CompTitle") || "JLPT N3 Comprehension", description: t("jlptN3CompDesc") || "Essential techniques for JLPT N3 reading success", link: "https://youtu.be/HzyIrcqMO64", actions: ["watch", "study", "read"] },
    { type: "Playlist", title: t("jpsScratchTitle") || "Japanese from Scratch", description: t("jpsScratchDesc") || "Learn hiragana and katakana through mnemonics", link: "https://www.youtube.com/playlist?list=PLGCwMMj881LjYEehR787n3Nm3u2cHJXuY", actions: ["watch", "study"] },
    { type: "Playlist", title: t("jpDesdeCeroTitle") || "Japonés desde cero", description: t("jpDesdeCeroDesc") || "Aprende japonés desde cero (Spanish Edition)", link: "https://www.youtube.com/watch?v=j53EwXyAS3Q&list=PLGCwMMj881Lg-vS8B7L0Yef9V21jQDfoy", actions: ["watch", "study"] },
    { type: "ShortVideo", title: t("beNiceTitle") || "Please be nice when booking your trial class", description: t("beNiceDesc") || "Over 13,000 views", link: "https://youtube.com/shorts/R-SyW8U3eec?feature=share", actions: ["watch"] },
    { type: "Series", title: t("tokyoTalesTitle") || "Tokyo Tales: Agent Carlos Learns Japanese", description: t("tokyoTalesDesc") || "Follow Carlos's adventures learning Japanese in Tokyo", link: "https://www.youtube.com/playlist?list=PLGCwMMj881LhpqIHpYXvQ429kQscSI-4a", actions: ["watch"] }
  ];

  // Filter by label/action if any, otherwise by type filter
  const visibleItems =
    activeLabel === "all"
      ? mediaItems
      : mediaItems.filter(
          (item) => item.actions && item.actions.includes(activeLabel)
        );

  // Insert the faqItems definition right here
  const faqItems = [
    {
      question: t("faqQuestion1") || "What languages do you teach?",
      answer: t("faqAnswer1") || "We teach Japanese, English, Spanish, and Chinese.",
    },
    {
      question: t("faqQuestion2") || "How do I book a lesson?",
      answer: t("faqAnswer2") || "Simply click on the 'Book a Lesson' button and select your preferred time slot.",
    },
    {
      question: t("faqQuestion3") || "Can I book a free trial?",
      answer: t("faqAnswer3") || "Yes! We offer free trial lessons for all new students.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section with decorative elements */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="blob-shape bg-brand-blue w-64 h-64 top-20 -left-20"></div>
        <div className="blob-shape bg-brand-purple w-80 h-80 bottom-10 -right-20"></div>
        
        <div className="container-custom relative z-10">
          <h1 className="gradient-text text-center mb-10 text-2xl md:text-3xl lg:text-4xl font-bold">
            Japanese, English, Spanish, Chinese: At CarlosCoordinator.com, you can catch them all.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <p className="text-xl mb-6 text-gray-700">
                {t("heroSubtitle1")}
              </p>
              <p className="text-xl mb-8 text-gray-700">
                {t("heroSubtitle2")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#booking"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  {t("bookTrialButton")}
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#teachers"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  {t("meetTeachersButton")}
                  <User size={18} />
                </a>
                <a
                  href="#testimonials"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  {t("seeReviewsButton")}
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                {/* This will be replaced with the actual video when it's ready */}
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-brand-blue/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg">
                        <p className="text-xl font-medium mb-2">
                          {t("comingSoon")}
                        </p>
                        <p className="text-sm">
                          {t("introVideoComingSoon")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Publications Section */}
      <section className="py-6 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-2">
            <h2 className="mb-3 font-bold text-2xl">
              <span className="text-black">More than </span>
              <span className="text-brand-purple">15,000 followers</span>
              <span className="text-gray-900"> across all my platforms cannot be wrong.</span>
            </h2>
          </div>
          
          <SocialLinks />
          
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {/* Action label filters - match ResourceActionButtons style */}
            {resourceLabels.map((label, i) => {
              // Match ResourceActionButtons color logic
              const colorByAction: Record<string, string> = {
                all: "bg-brand-purple text-white border-brand-purple hover:bg-brand-purple hover:text-white",
                read: "bg-brand-blue text-white border-brand-blue hover:bg-brand-blue hover:text-white",
                study: "bg-brand-purple text-white border-brand-purple hover:bg-brand-purple hover:text-white",
                watch: "bg-brand-red text-white border-brand-red hover:bg-brand-red hover:text-white",
                travel: "bg-brand-green text-white border-brand-green hover:bg-brand-green hover:text-white",
                work: "bg-gray-400 text-white border-gray-400 hover:bg-gray-400 hover:text-white",
              };
              const base = "px-4 py-1 rounded transition text-sm font-semibold border-2 capitalize";
              const active = colorByAction[label.key] || "bg-gray-100 text-gray-700 border-gray-300 hover:bg-brand-purple hover:text-white";
              const inactive = "bg-gray-100 text-gray-700 border-gray-300 hover:scale-105 " + (colorByAction[label.key]?.split(" ").slice(2).join(" ") || "hover:bg-brand-purple hover:text-white");
              return (
                <button
                  key={label.key}
                  onClick={() => setActiveLabel(label.key)}
                  className={`${base} ${activeLabel === label.key ? active : inactive}`}
                >
                  {label.label}
                </button>
              );
            })}
          </div>
          {/* ResourceList updated to handle correct visibleItems */}
          <ResourceList items={visibleItems} />
        </div>
      </section>

{/*Booking section  */}
<section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 relative overflow-hidden" id="booking">
  {/* Decorative blob */}
  <div className="blob-shape bg-brand-yellow w-72 h-72 top-20 -right-20"></div>
  
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="gradient-text mb-6">
        {t("bookLesson")}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        {t("bookLessonSubtitle")}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
        <div className="bg-brand-blue p-3">
          <h3 className="text-2xl font-bold text-white text-center">
            {t("bookTrialJapanese")}
          </h3>
        </div>
        <div className="bg-gray-50 rounded-lg flex items-start">
          <LazyLoad height={966} offset={100}>
            <iframe
              src="https://zcal.co/i/ulPXELUk?embed=1&embedType=iframe"
              frameBorder="0"
              className="zcal-embed w-full"
              id="zcal-invite-japanese"
              title="Japanese Assessment/Free Trial Booking"
              allow="calendar"
              scrolling="no"
              loading="lazy"
            ></iframe>
          </LazyLoad>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
        <div className="bg-brand-purple p-3">
          <h3 className="text-2xl font-bold text-white text-center">
            {t("bookTrialOther")}
          </h3>
        </div>
        <div className="bg-gray-50 rounded-lg flex items-start">
          <LazyLoad height={884} offset={100}>
            <iframe
              src="https://zcal.co/i/3giIaiX8?embed=1&embedType=iframe"
              frameBorder="0"
              className="zcal-embed w-full"
              id="zcal-invite-language"
              title="Discovery Call for English, Spanish, and Chinese"
              allow="calendar"
              scrolling="no"
              loading="lazy"
            ></iframe>
          </LazyLoad>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Teachers Section */}
      <section className="py-16 bg-white" id="teachers">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="gradient-text mb-6">
              {t("meetOurTeachers")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t("teachersSubtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <TeacherCard
                name="Carlos"
                image="/placeholder.svg"
                title={t("carlosTitle")}
                description={t("carlosDesc")}
                country="Spain"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <TeacherCard
                name="Eiko"
                image="/placeholder.svg"
                title={t("eikoTitle")}
                description={t("eikoDesc")}
                country="Japan"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <TeacherCard
                name="Caolan"
                image="/placeholder.svg"
                title={t("caolanTitle")}
                description={t("caolanDesc")}
                country="Ireland"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <TeacherCard
                name="Yulu"
                image="/placeholder.svg"
                title={t("yuluTitle")}
                description={t("yuluDesc")}
                country="China"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 relative" id="testimonials">
        {/* Decorative blob */}
        <div className="blob-shape bg-brand-green w-64 h-64 bottom-20 -left-20"></div>
        
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="gradient-text mb-6">
              {t("testimonials")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("testimonialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="John Doe"
              content="Carlos is an excellent teacher! He helped me prepare for the JLPT N2 exam, and I passed with flying colors. His teaching method is very effective and engaging."
              rating={5}
              date="2 months ago"
            />
            <TestimonialCard
              name="Jane Smith"
              content="I've been taking Japanese lessons with Eiko for 6 months now, and my speaking ability has improved dramatically. She's patient, knowledgeable, and makes learning fun."
              rating={5}
              date="1 month ago"
            />
            <TestimonialCard
              name="Robert Johnson"
              content="Learning Spanish with Carlos has been a great experience. His knowledge of both Japanese and Spanish helps a lot with understanding the differences between the languages."
              rating={4}
              date="3 months ago"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=carloscoordinator&sca_esv=b0843fbf5841e7a4&source=hp&ei=AhIkaMXeFemfvr0P1ee5mAw&iflsig=ACkRmUkAAAAAaCQgEpzPwvuC-kJp8CwPfuD77AOVgfb0&ved=0ahUKEwjF57GehqKNAxXpj68BHdVzDsMQ4dUDCBk&uact=5&oq=carloscoordinator&gs_lp=Egdnd3Mtd2l6IhFjYXJsb3Njb29yZGluYXRvcjIGEAAYDRgeMggQABgIGA0YHjIIEAAYCBgNGB4yBRAAGO8FMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBEjvClAAWPMJcAB4AJABAZgB7gGgAdYSqgEGMC4xNS4xuAEDyAEA-AEBmAIPoALFEcICDRAAGIAEGLEDGIMBGATCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIKEAAYgAQYsQMYBMICBxAAGIAEGArCAgQQABgewgIJEAAYgAQYExgKmAMAkgcGMC4xNC4xoAecJrIHBjAuMTQuMbgHxRE&sclient=gws-wiz#mpd=~5098248184570713783/customers/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-outline mt-8"
            >
              View All Reviews <ArrowRight size={16} className="ml-1 inline" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="gradient-text mb-6">
              {t("whatMakesUsDifferent")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("whatMakesUsDifferentSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title={t("featureMethod")}
              description={t("featureMethodDesc")}
              icon={<Book size={32} className="text-brand-blue" />}
            />
            <FeatureCard
              title={t("featureApps")}
              description={t("featureAppsDesc")}
              icon={<Smartphone size={32} className="text-brand-purple" />}
            />
            <FeatureCard
              title={t("featureExperience")}
              description={t("featureExperienceDesc")}
              icon={<User size={32} className="text-brand-green" />}
            />
            <FeatureCard
              title={t("featureFlexibility")}
              description={t("featureFlexibilityDesc")}
              icon={<Globe size={32} className="text-brand-orange" />}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5" id="faq">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="gradient-text mb-6">
              {t("faq")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("faqSubtitle")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
            <Faq items={faqItems} />
          </div>
        </div>
      </section>

      {/* Japan Intern Banner */}
      <section className="py-12 bg-[rgb(239,210,180)] text-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">JapanIntern.Net</h2>
              <p className="text-xl">{`Find your dream internship in Japan with our free service for students`}</p>
            </div>
            <a
              href="https://japanintern.net"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 md:mt-0 bg-black text-[#00b4d8] font-medium py-3 px-6 rounded-xl hover:bg-opacity-90 transition duration-200 transform hover:scale-105 shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Radical Banner */}
      <section className="py-12 bg-black text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Radical. <sup className="text-sm">TM</sup></h2>
              <p className="text-xl">{`Boost your kanji and vocabulary acquisition with this online dictionary, designed with our students in mind.`}</p>
            </div>
            <a
              href="/radical"
              className="mt-8 md:mt-0 bg-brand-blue text-white font-medium py-3 px-6 rounded-xl hover:bg-opacity-90 transition duration-200 transform hover:scale-105 shadow-md"
            >
              Try Radical
            </a>
          </div>
        </div>
      </section>

      {/* N1-N2 Course Banner */}
      <section className="py-12 bg-brand-purple text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">N1-N2 Reading Comprehension Course</h2>
              <p className="text-xl">{`The reading part of the JLPT (読解) is the hardest part. With our course, not any more.`}</p>
            </div>
            <a
              href="/n1n2-course"
              className="mt-8 md:mt-0 bg-brand-yellow text-black font-medium py-3 px-6 rounded-xl hover:bg-opacity-90 transition duration-200 transform hover:scale-105 shadow-md"
            >
              Discover Course
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
