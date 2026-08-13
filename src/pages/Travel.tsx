import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Mail } from "lucide-react";

const CONTACT_EMAIL =
  "mailto:carlosarzua@usal.es?subject=Travel%20enquiry%20-%20CarlosCoordinator";
const WALK_THE_WORLD = "https://www.linkedin.com/company/wtw-walktheworld/home/";

const Travel = () => {
  const { t } = useLanguage();

  const destinations = [
    {
      title: t("travelJapanTitle"),
      body: t("travelJapanBox"),
      links: [
        { label: t("walkTheWorldCta"), href: WALK_THE_WORLD, external: true, primary: true, icon: <ArrowRight size={16} /> },
        { label: t("travelContactCta"), href: CONTACT_EMAIL, icon: <Mail size={16} /> },
      ],
    },
    {
      title: t("travelHimalayasTitle"),
      body: t("travelHimalayasBox"),
      links: [
        {
          label: t("travelNewsletterCta"),
          href: "https://www.linkedin.com/newsletters/my-narrow-road-to-the-interior-7148990295269855232/",
          external: true,
          primary: true,
          icon: <ArrowRight size={16} />,
        },
      ],
    },
    {
      title: t("travelSpainTitle"),
      body: t("travelSpainBox"),
      links: [
        { label: t("walkTheWorldCta"), href: WALK_THE_WORLD, external: true, primary: true, icon: <ArrowRight size={16} /> },
        { label: t("travelContactCta"), href: CONTACT_EMAIL, icon: <Mail size={16} /> },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-28 md:pt-32 pb-20">
        <div className="container-custom">
          <header className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">{t("travelEyebrow")}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
              {t("travelTitle")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("travelDescription")}</p>
          </header>

          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-border shadow-sm p-6 md:p-8 mb-10">
            <p className="text-muted-foreground leading-relaxed text-center">
              {t("travelPageIntro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <div
                key={d.title}
                className="flex flex-col bg-white rounded-xl border border-border shadow-sm p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-brand-dark mb-3">{d.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {d.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`${link.primary ? "btn-primary" : "btn-outline"} text-sm`}
                    >
                      {link.label} {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Travel;
