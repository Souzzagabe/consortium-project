import type { MetadataRoute } from "next";

const BASE_URL = "https://matheusmultiplica.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/servicos", priority: 0.9 },
    { path: "/planos", priority: 0.9 },
    { path: "/como-funciona", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
  ];

  const blogSlugs = [
    "consorcio-vale-a-pena",
    "consorcio-ou-financiamento",
    "como-ser-contemplado-mais-rapido",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === "/blog" ? "weekly" : "monthly",
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
