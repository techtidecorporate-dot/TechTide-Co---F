import { useNewsletter } from "@/app/hooks/useNewsletter";

export function NewsletterSection() {
  const {
    email,
    setEmail,
    loading,
    subscribe: handleSubscribe,
    unsubscribe: handleUnsubscribe,
  } = useNewsletter();

  return (
    <section className="bg-[#f8fbff] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(69,58,188,0.08)] p-10 md:p-14 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#453abc] mb-4">
              Stay in the loop
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-4">
              Subscribe to our newsletter for new blog alerts.
            </h2>
            <p className="text-base text-[#6b7280] max-w-2xl leading-relaxed">
              Get notified when we publish the latest business insights, product updates, and technology stories from TechTide Corporate LLP.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <label className="block text-sm font-medium text-[#374151]">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#453abc] focus:ring-2 focus:ring-[#453abc]/20"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-2xl bg-[#453abc] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#5a4fee] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Processing..." : "Subscribe"}
              </button>
              <button
                type="button"
                onClick={() => handleUnsubscribe()}
                disabled={loading}
                className="inline-flex items-center justify-center rounded-2xl border border-[#453abc] px-6 py-4 text-sm font-semibold text-[#453abc] transition hover:bg-[#453abc]/5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Unsubscribe
              </button>
            </div>

            <p className="text-sm text-[#6b7280]">
              We keep your email secure and only send notifications for new blogs.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
