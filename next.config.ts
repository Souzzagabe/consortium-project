import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" foi removido para habilitar API Routes (envio de e-mail via Resend).
  // Deploy via Vercel (suporte nativo a Next.js server-side).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
