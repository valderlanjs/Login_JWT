import dotenv from 'dotenv';

dotenv.config();

export default {
  port: Number(process.env.PORT) || 3000,
  auth: {
    secret: process.env.AUTH_SECRET || "secret123",
    expiresIn: process.env.AUTH_EXPIRES_IN || "7d",
  },
};