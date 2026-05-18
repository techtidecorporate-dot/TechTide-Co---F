
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BLOGS_DB_URL = "https://techtide-corporate-llp-eb187-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json";
const SITE_URL = "https://techtidecorporate.com";
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Manual Services (from servicesData.ts and seoServicesData.ts)
const MANUAL_SERVICES = [
    'lead-generation-websites',
    'conversion-optimization',
    'growth-marketing-systems',
    'business-automation-systems',
    'saas-product-development',
    'api-integration',
    'web-development-company',
    'mobile-app-development-company',
    'saas-software-development-company'
];

function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

async function generateSitemap() {
    console.log('Generating sitemap...');
    
    try {
        // Fetch dynamic blogs from Firebase
        const blogsData = await fetchJson(BLOGS_DB_URL);
        const blogs = blogsData && !blogsData.error ? Object.keys(blogsData).map(key => ({ id: key, ...blogsData[key] })) : [];

        const today = new Date().toISOString().split('T')[0];

        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
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
  </url>

  <!-- Manual Service Pages -->
  ${MANUAL_SERVICES.map(slug => `
  <url>
    <loc>${SITE_URL}/services/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}

  <!-- Dynamic Blog Pages -->
  ${blogs.map(blog => `
  <url>
    <loc>${SITE_URL}/blog/${blog.slug || blog.id}</loc>
    <lastmod>${(blog.updatedAt || blog.createdAt || blog.uploadedDate || today).split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

  <!-- Legal Pages -->
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

        fs.writeFileSync(SITEMAP_PATH, xml);
        console.log(`Sitemap generated successfully at ${SITEMAP_PATH}`);
        console.log(`Total URLs: ${6 + MANUAL_SERVICES.length + blogs.length + 3}`);
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
