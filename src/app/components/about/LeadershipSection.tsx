import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { teamData } from "@/app/components/team/teamData";

const leadershipMembers = teamData.filter(m =>
  ["CEO", "CTO", "CFO", "COO", "Head"].includes(m.category)
);

export function LeadershipSection() {
  return (
    <section id="leadership" className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32 scroll-mt-24">
      <div className="text-center mb-12">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Leadership
        </p>
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#191a23] mb-4">
          Meet the Team Behind TechTide
        </h2>
        <p className="text-[#6b7280] text-base max-w-xl mx-auto">
          Our leadership team brings decades of combined experience in
          technology, strategy, and business growth.
        </p>
      </div>

      <div className="flex justify-center">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          initialSlide={0}
          slidesPerGroup={1}
          spaceBetween={20}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="rounded-2xl mb-20 w-full"
          style={{
            "--swiper-navigation-color": "#453abc",
            "--swiper-navigation-size": "24px",
          } as React.CSSProperties}
        >
          {leadershipMembers.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl overflow-hidden transition-all group h-full">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl font-semibold text-[#453abc]">
                      {member.name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)}
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-poppins font-semibold text-[#191a23] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#6b7280] font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
