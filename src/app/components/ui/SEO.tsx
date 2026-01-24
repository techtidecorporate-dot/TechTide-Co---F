import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEO = ({
  title = "TechTide Corporate LLP | Leading Web & Software Development Agency",
  description = "TechTide Corporate LLP provides world-class web development, custom software solutions, UI/UX design, and digital transformation services. We build scalable and high-performance applications tailored to your business needs.",
  keywords = "web development, custom software, UI/UX design, React.js, Full stack development, IT consulting, digital transformation, enterprise solutions, TechTide Corporate, professional web agency",
  author = "TechTide Corporate LLP",
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg", // Make sure to provide a valid image path later
  ogUrl = "https://techtidecorporate.com",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SEOProps) => {
  const siteTitle = title.includes("TechTide")
    ? title
    : `${title} | TechTide Corporate LLP`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={ogDescription || description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={ogUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta
        property="twitter:title"
        content={twitterTitle || ogTitle || siteTitle}
      />
      <meta
        property="twitter:description"
        content={twitterDescription || ogDescription || description}
      />
      <meta property="twitter:image" content={twitterImage || ogImage} />
    </Helmet>
  );
};

export default SEO;
