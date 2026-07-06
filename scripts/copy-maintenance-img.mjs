import { copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const src = 'C:/Users/hamza/.gemini/antigravity-ide/brain/d77030ce-ec69-4494-99a3-5eccc04f7383/maintenance_support_service_1781502960485.png';
const dest = 'e:/TechTide-Co---F/src/assets/Services/maintenance-support.png';

copyFileSync(src, dest);
console.log('✅ Copied maintenance-support.png to assets/Services/');
