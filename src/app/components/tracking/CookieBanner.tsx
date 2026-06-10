import { useCookieConsent } from "@/app/hooks/useCookieConsent";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const { consent, loading, acceptAll, rejectNonEssential } =
    useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="w-full rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <h3 className="text-white text-lg font-semibold mb-1">
              We Value Your Privacy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies. Read our{" "}
              <Link
                to="/cookie-policy"
                className="text-[#60c3e3] hover:underline"
              >
                Cookie Policy
              </Link>{" "}
              for more information.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={rejectNonEssential}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors disabled:opacity-50"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={acceptAll}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#453abc] to-[#60c3e3] hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                "Accept All Cookies"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
