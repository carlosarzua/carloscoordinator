
interface BannerSectionProps {
  colorClass: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  extra?: React.ReactNode;
}

export const BannerSection = ({
  colorClass,
  title,
  description,
  href,
  cta,
  extra
}: BannerSectionProps) => (
  <section className={`py-12 ${colorClass} text-white`}>
    <div className="container-custom">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-xl text-white/90">{description}</p>
        </div>
        {href && cta ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-0 bg-black text-white font-medium py-3 px-6 rounded-xl hover:bg-opacity-90 transition duration-200 transform hover:scale-105 shadow-md"
          >
            {cta}
          </a>
        ) : null}
        {extra}
      </div>
    </div>
  </section>
);
