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
    <section className="testimonial-section">
      <h2 className="heading">TESTIMONIALS</h2>
      <div className="underline" />
      <p className="subtext">Subscribe Easy Tutorials YouTube channel to watch more videos.</p>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            data-id={t.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`testimonial-card ${visibleCards.includes(t.id) ? "in-view" : ""}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="avatar">{t.initials}</div>
            <div className="card-body">
              <span className="quote-icon">&ldquo;</span>
              <p className="quote">{t.quote}</p>
              <span className="quote-icon end">&rdquo;</span>
              <p className="name">
                {t.name} <span className="role">{t.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .testimonial-section {
          padding: 70px 40px;
          background: #ffffff;
          text-align: center;
        }

      .heading {
  color: #0066cc; /* TechTide Blue */
  font-size: 32px; /* Increased font size for prominence */
  font-weight: 800;
  letter-spacing: 1.5px; /* Slight letter-spacing */
  margin: 0 0 15px; /* More bottom margin for spacing */
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  text-transform: uppercase; /* Optional: makes heading uppercase */
}

        .underline {
          width: 60px;
          height: 3px;
          background: #0066cc; /* TechTide Blue */
          margin: 0 auto 18px;
          border-radius: 2px;
        }

        .subtext {
          color: #6b6b6b;
          font-size: 14px;
          margin-bottom: 44px;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .testimonial-card {
          position: relative;
          background: #f4f5f7;
          border-radius: 6px;
          padding-top: 46px;
          padding-bottom: 28px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.25s ease;
        }

        .testimonial-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-card:hover {
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .testimonial-card.in-view:hover {
          transform: translateY(-4px);
        }

        .avatar {
          position: absolute;
          top: -32px;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0066cc, #004499); /* TechTide Blue Gradient */
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 5px #ffffff, 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .card-body {
          padding: 0 26px;
        }

        .quote-icon {
          font-family: Georgia, serif;
          font-size: 28px;
          color: #0066cc; /* TechTide Blue */
          line-height: 1;
          display: block;
        }

        .quote-icon.end {
          text-align: right;
        }

        .quote {
          color: #555555;
          font-size: 13.5px;
          line-height: 1.8;
          margin: 4px 0;
        }

        .name {
          margin-top: 14px;
          font-weight: 700;
          color: #0066cc; /* TechTide Blue */
          font-size: 14px;
        }

        .role {
          color: #8a8a8a;
          font-weight: 400;
          font-size: 13px;
        }

        @media (max-width: 1024px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
        }

        @media (max-width: 480px) {
          .testimonial-section {
            padding: 50px 20px;
          }
        }
      `}</style>
    </section>
  );
}