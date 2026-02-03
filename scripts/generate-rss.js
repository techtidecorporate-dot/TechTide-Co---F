
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DB_URL = "https://techtidecorporatellp-default-rtdb.firebaseio.com/blogs.json";
const SITE_URL = "https://techtidecorporate.com";
const RSS_PATH = path.join(__dirname, '..', 'public', 'rss.xml');

function escapeXml(unsafe) {
    if (!unsafe || typeof unsafe !== 'string') return '';
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

function generateRss() {
    console.log('Fetching blogs from Firebase...');
    
    https.get(DB_URL, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            try {
                const blogsData = JSON.parse(data);
                if (!blogsData) {
                    console.error('No blogs found in database.');
                    return;
                }

                const blogPosts = Object.keys(blogsData).map(key => ({
                    id: key,
                    ...blogsData[key]
                })).sort((a, b) => {
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

                blogPosts.forEach(post => {
                    const postUrl = escapeXml(`${SITE_URL}/blog/${post.slug || post.id}`);
                    const postDate = new Date(post.uploadedDate || post.createdAt || Date.now()).toUTCString();
                    const rawImageUrl = post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : '';
                    const imageUrl = escapeXml(rawImageUrl);
                    
                    rssContent += `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${postUrl}</link>
    <pubDate>${postDate}</pubDate>
    <dc:creator><![CDATA[${post.author || 'TechTide'}]]></dc:creator>
    <guid isPermaLink="false">${postUrl}</guid>
    <description><![CDATA[${post.description || ''}]]></description>
    <content:encoded><![CDATA[${post.content || post.description || ''}]]></content:encoded>
    ${imageUrl ? `<media:content url="${imageUrl}" medium="image" />` : ''}
    ${imageUrl ? `<enclosure url="${imageUrl}" length="0" type="image/jpeg" />` : ''}
  </item>`;
                });

                rssContent += `
</channel>
</rss>`;

                fs.writeFileSync(RSS_PATH, rssContent);
                console.log(`RSS feed generated successfully at ${RSS_PATH}`);
            } catch (error) {
                console.error('Error parsing blog data:', error);
            }
        });
    }).on('error', (err) => {
        console.error('Error fetching blogs:', err.message);
    });
}

generateRss();
