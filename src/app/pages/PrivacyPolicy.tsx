import { PolicyLayout, privacyContent } from "../components/policy";
import SEO from "../components/ui/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy of TechTide Corporate LLP. Learn how we collect, use, and protect your personal data."
      />
      <PolicyLayout {...privacyContent} />
    </>
  );
};

export default PrivacyPolicy;
