import { siteConfig } from "@/lib/siteConfig";

export default function sitemap() {
  return [
    {
      url: siteConfig.website,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
