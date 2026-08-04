import { PolicyLayout, cookieContent } from "../components/policy";
import SEO from "../components/ui/SEO";

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Cookie Policy for TechTide Corporate LLP. Learn how we use cookies to improve your browsing experience."
        keywords="cookie policy, TechTide cookies, website cookies, cookie usage, privacy"
      />
      <PolicyLayout {...cookieContent} />
    </>
  );
};

export default CookiePolicy;
