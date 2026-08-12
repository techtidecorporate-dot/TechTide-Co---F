import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    initials: "AK",
    quote:
      "Like this video and ask your questions in the comment section, don't forget to subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
  },
  {
    id: 2,
    name: "Bharat Kunal",
    role: "Manager at xyz",
    initials: "BK",
    quote:
      "Like this video and ask your questions in the comment section, don't forget to subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
  },
  {
    id: 3,
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    initials: "PD",
    quote:
      "Like this video and ask your questions in the comment section, don't forget to subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
  },
];

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleCards((prev) => (prev.includes(id) ? prev : [...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-20 px-4 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#191a23] leading-[1.1] mb-4 md:mb-6">
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">Say</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We build digital experiences that help businesses grow, and our clients stay with us because the results speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-id={t.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`relative bg-white rounded-3xl border border-gray-100 shadow-sm p-6 pt-14 transition-all duration-700 ease-out ${visibleCards.includes(t.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#453abc] to-[#60c3e3] text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-[#453abc]/20 ring-4 ring-white">
                {t.initials}
              </div>

              <div className="text-left">
                <span className="block font-serif text-5xl leading-none text-[#453abc]/80">&ldquo;</span>
                <p className="text-sm md:text-[15px] text-gray-600 leading-7 mt-2 mb-6">{t.quote}</p>
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-base font-bold text-[#191a23]">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <span className="text-[#453abc] text-2xl font-serif leading-none">&rdquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}