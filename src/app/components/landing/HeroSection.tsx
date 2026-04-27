import HeroImage from '../../../assets/landing/Hero Image.webp'

export function HeroSection() {

  return (
    <section className="relative h-screen px-6 md:px-[70px] flex items-center justify-center text-center overflow-hidden bg-gray-900">

      {/* Background Technology Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Technology Background"
          className="w-full h-full object-cover"
          loading="eager"
          // @ts-ignore
          fetchpriority="high"
          decoding="async"
        />
        {/* Dark Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/70 to-[#0a0a0c]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1100px] mx-auto pt-20">
          

          {/* Main Heading */}
          <h1 className="mb-8 leading-[1.15] opacity-0 animate-fade-up delay-200">
            <span className="font-poppins block text-white text-3xl md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight">
              We Help Businesses Generate
            </span>
            <span className="font-poppins block bg-gradient-to-r from-[#453abc] via-[#60c3e3] to-[#453abc] bg-clip-text text-transparent text-3xl md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight">
              3 to 5x More Leads
            </span>
          </h1>

          {/* Subheading */}
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-2 text-base md:text-xl leading-relaxed text-white/70 font-medium opacity-0 animate-fade-up delay-400">
            <p>
              Through high-converting websites and digital systems. We transform your generic company profile into a high-performance sales asset that builds trust and generates qualified leads.
            </p> 
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 opacity-0 animate-fade-up delay-600">
            <button
              className="group relative w-full md:w-auto px-12 py-5 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 text-white font-bold text-lg shadow-[0_0_20px_rgba(69,58,188,0.3)] hover:shadow-[0_0_30px_rgba(69,58,188,0.6)]"
              onClick={() => window.dispatchEvent(new CustomEvent("open-audit-drawer"))}
            >
              <div 
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: "linear-gradient(93.1835deg, rgb(69, 58, 188) 0%, rgb(96, 195, 227) 103.41%)",
                }}
              />
              <span className="relative z-10">Get Free Website Audit</span>
            </button>
            <button
              className="w-full md:w-auto px-12 py-5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-white font-bold text-lg backdrop-blur-md"
              onClick={() => window.dispatchEvent(new CustomEvent("open-strategy-drawer"))}
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

