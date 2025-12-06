import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export const PORT = process.env.PORT || 4000;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
export const SERVER_IP = process.env.SERVER_IP || 'localhost';
