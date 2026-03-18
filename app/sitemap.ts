import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://matheusmultiplica.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/planos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/como-funciona", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const blogSlugs = [
    "consorcio-vale-a-pena",
    "consorcio-ou-financiamento",
    "como-ser-contemplado-mais-rapido",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
