import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url:"postgresql://neondb_owner:MifOAry9H8tv@ep-rough-dawn-a510t23t.us-east-2.aws.neon.tech/ai_social_media_saas?sslmode=require",
  },
});
