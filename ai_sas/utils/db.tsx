import { neon, NeonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';



export const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_NEON_URL);