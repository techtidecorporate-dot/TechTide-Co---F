import { PolicyLayout, termsContent } from "../components/policy";
import SEO from "../components/ui/SEO";

const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for TechTide Corporate LLP. Review the terms governing the use of our website and services."
        keywords="terms of service, TechTide terms, website terms, legal agreement, terms and conditions"
      />
      <PolicyLayout {...termsContent} />
    </>
  );
};

export default TermsOfService;
