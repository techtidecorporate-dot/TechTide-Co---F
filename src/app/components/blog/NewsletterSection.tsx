import { ChangeEvent, FormEvent } from "react";

interface NewsletterSectionProps {
  email: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export function NewsletterSection({
  email,
  onEmailChange,
  onSubmit,
  loading,
}: NewsletterSectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
      <div className="relative overflow-hidden bg-[#191a23] bg-gradient-to-br from-[#191a23] via-[#453abc]/20 to-[#191a23] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#453abc]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#60c3e3]/10 rounded-full blur-[100px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-poppins font-medium text-white mb-6">
            Subscribe to TechTide{" "}
            <span className="text-[#60c3e3]">Insights</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ professionals receiving weekly updates on the latest
            tech innovations and digital transformation strategies.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="Enter your work email"
              className="flex-1 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#453abc] transition-all text-sm md:text-base"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white px-10 py-4 rounded-2xl font-poppins font-medium hover:shadow-[0_10px_30px_rgba(69,58,188,0.4)] transition-all hover:-translate-y-1 whitespace-nowrap text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Join Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
