import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export para hospedagem compartilhada (Hostinger)
  // Para reativar API Routes (e-mail Resend), remova 'output' e faça deploy na Vercel.
  output: "export",
  trailingSlash: true,
  images: {
    // Otimização de imagem via servidor não funciona em export estático
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
