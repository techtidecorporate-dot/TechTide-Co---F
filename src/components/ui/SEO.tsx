import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * ------------------------------------------------------------------
 * QUICK PRIMER (since you asked "I have no idea about Open Graph")
 * ------------------------------------------------------------------
 * - <meta name="..."> tags (description, keywords, robots, twitter:*)
 *   are read by SEARCH ENGINES / GENERAL CRAWLERS.
 * - <meta property="og:..."> tags (Open Graph) are read by SOCIAL
 *   PLATFORMS (Facebook, LinkedIn, WhatsApp, Slack, Discord) to build
 *   the preview card when someone pastes your link.
 * - <meta name="twitter:..."> tags are Twitter/X's OWN card format.
 *   It falls back to Open Graph tags if these are missing, but
 *   providing them lets you customize the X-specific preview.
 * - JSON-LD (the <script type="application/ld+json"> block below) is
 *   STRUCTURED DATA. This is what actually earns rich results in
 *   Google (star ratings, sitelinks search box, org knowledge panel,
 *   article snippets) — Open Graph does NOT do this by itself.
 * ------------------------------------------------------------------
 */

// Set this once via env var so you never hardcode the domain in
// multiple places (and staging/prod don't leak into each other).
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://techtidecorporate.com";
const SITE_NAME = "TechTide Corporate LLP";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`; // must be an ABSOLUTE url

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;

  /** Overrides the description used ONLY in Open Graph tags (falls back to `description`) */
  ogTitle?: string;
  ogDescription?: string;
  /** Absolute URL required. If you pass a relative path it will be auto-prefixed with SITE_URL. */
  ogImage?: string;
  ogImageAlt?: string;
  /** "website" for normal pages, "article" for blog posts */
  ogType?: "website" | "article";

  /** Only needed if you want to override the auto-derived canonical URL (rare) */
  url?: string;

  /** Set true on drafts / thank-you pages / internal search / admin pages */
  noindex?: boolean;
  nofollow?: boolean;

  /** Article-only fields, used when ogType="article" */
  publishedTime?: string; // ISO 8601, e.g. "2026-08-01T09:00:00Z"
  modifiedTime?: string;
  articleAuthor?: string;

  /** Pass custom JSON-LD if this page needs something other than the default Organization schema */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({
  title = "TechTide Corporate LLP | Leading Web & Software Development Agency",
  description = "TechTide Corporate LLP provides world-class web development, custom software solutions, UI/UX design, and digital transformation services. We build scalable and high-performance applications tailored to your business needs.",
  keywords = "web development, custom software, UI/UX design, React.js, Full stack development, IT consulting, digital transformation, enterprise solutions, TechTide Corporate, professional web agency",
  author = SITE_NAME,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "TechTide Corporate LLP",
  ogType = "website",
  url,
  noindex = false,
  nofollow = false,
  publishedTime,
  modifiedTime,
  articleAuthor,
  structuredData,
}: SEOProps) => {
  const { pathname } = useLocation();

  // --- Derive the canonical URL from the current route instead of
  // trusting every page to pass it manually. This is the fix for the
  // "forgot to pass ogUrl -> canonical points at homepage" bug.
  const canonicalUrl = url
    ? absoluteUrl(url)
    : `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  const siteTitle = title.includes("TechTide")
    ? title
    : `${title} | ${SITE_NAME}`;

  const finalDescription = description; // meta description is ALWAYS `description`, never OG-first
  const finalOgDescription = ogDescription || description;
  const finalOgImage = absoluteUrl(ogImage);

  // --- Dev-time guardrails: warn (never throw) if lengths risk truncation in SERPs
  if (import.meta.env.DEV) {
    if (siteTitle.length > 60) {
      console.warn(
        `[SEO] Title is ${siteTitle.length} chars, Google typically truncates around 60: "${siteTitle}"`
      );
    }
    if (finalDescription.length > 160) {
      console.warn(
        `[SEO] Description is ${finalDescription.length} chars, Google typically truncates around 160.`
      );
    }
  }

  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  // Default structured data: Organization schema. Override per-page via
  // the `structuredData` prop (e.g. Article, BreadcrumbList, FAQPage schema).
  const jsonLd =
    structuredData ||
    (ogType === "article"
      ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: siteTitle,
        description: finalDescription,
        image: finalOgImage,
        author: { "@type": "Person", name: articleAuthor || author },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      }
      : {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: finalDescription,
      });

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn / Slack / WhatsApp previews */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Article-specific OG tags (only meaningful when ogType="article") */}
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === "article" && (
        <meta property="article:author" content={articleAuthor || author} />
      )}

      {/* Structured Data (JSON-LD) — this is what earns rich results in Google */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

/** Ensures an image/URL prop is absolute (social crawlers reject relative paths). */
function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export default SEO;
