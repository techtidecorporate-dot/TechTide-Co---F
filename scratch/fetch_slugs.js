
import https from 'https';

const BLOGS_URL = "https://techtidecorporatellp-default-rtdb.firebaseio.com/blogs.json";
const SERVICES_URL = "https://techtidecorporatellp-default-rtdb.firebaseio.com/services.json";

function fetchJson(url) {
    return new Promise((resolve) => {
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
        }).on('error', () => resolve(null));
    });
}

async function run() {
    const blogs = await fetchJson(BLOGS_URL);
    const services = await fetchJson(SERVICES_URL);
    
    console.log("BLOG_SLUGS:");
    if (blogs) {
        Object.values(blogs).forEach(b => console.log(b.slug));
    }
    
    console.log("SERVICE_SLUGS:");
    if (services) {
        Object.values(services).forEach(s => console.log(s.slug));
    }
}

run();
