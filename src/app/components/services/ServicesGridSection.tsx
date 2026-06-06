import { Link } from "react-router-dom";

interface ServiceCard {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;
}

interface ServicesGridSectionProps {
  services: ServiceCard[];
}

export function ServicesGridSection({ services }: ServicesGridSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((service) => (
          <article
            key={service.id}
            className="bg-white rounded-[1rem] md:rounded-[1rem] border border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-[#453abc]/10 transition-all duration-500 overflow-hidden group flex flex-col"
          >
            {service.image && (
              <Link
                to={`/services/${service.slug}`}
                className="h-52 overflow-hidden block"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
            )}
            <div className="p-4">
              <Link to={`/services/${service.slug}`}>
                <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#191a23] mb-3 group-hover:text-[#453abc] transition-colors line-clamp-2 min-h-[3.5rem] md:min-h-[4rem] flex items-center">
                  {service.title}
                </h2>
              </Link>

              <p className="text-[#6b7280] text-sm md:text-base leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem] md:min-h-[5rem]">
                {service.shortDescription}
              </p>

              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-partner-drawer"))
                }
                className="w-full py-2.5 rounded-lg text-white font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm mt-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
                }}
              >
                Get in touch
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
