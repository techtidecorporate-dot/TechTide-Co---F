const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const SITE_URL = "https://techtidecorporate.com";
const DB_PATH = "blogs";

function escapeXml(unsafe) {
  if (!unsafe || typeof unsafe !== "string") return "";
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
    }
  });
}

async function generateRssXml() {
  const db = admin.database();
  const snapshot = await db.ref(DB_PATH).once("value");
  const blogsData = snapshot.val();

  if (!blogsData) return null;

  const blogPosts = Object.keys(blogsData)
    .map((key) => ({ id: key, ...blogsData[key] }))
    .sort((a, b) => {
      const dateA = new Date(a.uploadedDate || a.createdAt || 0).getTime();
      const dateB = new Date(b.uploadedDate || b.createdAt || 0).getTime();
      return dateB - dateA;
    });

  let rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
    xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
    xmlns:media="http://search.yahoo.com/mrss/"
>
<channel>
  <title>TechTide Corporate Blog</title>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  <link>${SITE_URL}/blog</link>
  <description>Stay updated with the latest trends in web development, mobile apps, and digital innovation from TechTide Corporate LLP.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <sy:updatePeriod>hourly</sy:updatePeriod>
  <sy:updateFrequency>1</sy:updateFrequency>
`;

  blogPosts.forEach((post) => {
    const postUrl = escapeXml(`${SITE_URL}/blog/${post.slug || post.id}`);
    const postDate = new Date(
      post.uploadedDate || post.createdAt || Date.now()
    ).toUTCString();
    const rawImageUrl = post.image
      ? post.image.startsWith("http") || post.image.startsWith("data:")
        ? post.image
        : `${SITE_URL}${post.image}`
      : "";
    const imageUrl = escapeXml(rawImageUrl);

    rssContent += `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${postUrl}</link>
    <pubDate>${postDate}</pubDate>
    <dc:creator><![CDATA[${(post.author || "TechTide").replace(/]]>/g, "]]&gt;")}]]></dc:creator>
    <guid isPermaLink="false">${postUrl}</guid>
    <description><![CDATA[${(post.description || "").replace(/]]>/g, "]]&gt;")}]]></description>
    <content:encoded><![CDATA[${(post.content || post.description || "").replace(/]]>/g, "]]&gt;")}]]></content:encoded>
    ${imageUrl ? `<media:content url="${imageUrl}" medium="image" />` : ""}
    ${imageUrl ? `<enclosure url="${imageUrl}" length="0" type="image/jpeg" />` : ""}
  </item>`;
  });

  rssContent += `
</channel>
</rss>`;

  return rssContent;
}

exports.rssFeed = functions.https.onRequest(async (req, res) => {
  try {
    const xml = await generateRssXml();
    if (!xml) {
      res.status(404).send("No blogs found");
      return;
    }
    res.set("Content-Type", "application/rss+xml; charset=utf-8");
    res.status(200).send(xml);
  } catch (error) {
    console.error("Error generating RSS:", error);
    res.status(500).send("Internal Server Error");
  }
});

const MANUAL_SERVICES = [
  "lead-generation-websites",
  "conversion-optimization",
  "growth-marketing-systems",
  "business-automation-systems",
  "saas-product-development",
  "api-integration",
  "web-development-company",
  "mobile-app-development-company",
  "saas-software-development-company",
];

async function generateSitemapXml() {
  const db = admin.database();
  const snapshot = await db.ref("blogs").once("value");
  const blogsData = snapshot.val();
  const blogs = blogsData
    ? Object.keys(blogsData).map((key) => ({ id: key, ...blogsData[key] }))
    : [];

  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/ourteam</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/career</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/signin</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;

  for (const slug of MANUAL_SERVICES) {
    xml += `
  <url>
    <loc>${SITE_URL}/services/${escapeXml(slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  }

  for (const blog of blogs) {
    const lastmod = (
      blog.updatedAt || blog.createdAt || blog.uploadedDate || today
    ).split("T")[0];
    xml += `
  <url>
    <loc>${SITE_URL}/blog/${escapeXml(blog.slug || blog.id)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  xml += `
  <url>
    <loc>${SITE_URL}/privacy-policy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/terms-of-service</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/cookie-policy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

  return xml;
}

exports.sitemapFeed = functions.https.onRequest(async (req, res) => {
  try {
    const xml = await generateSitemapXml();
    res.set("Content-Type", "application/xml; charset=utf-8");
    res.status(200).send(xml);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Internal Server Error");
  }
});
