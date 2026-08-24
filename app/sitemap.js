import { getBaseUrl } from "@/lib/utils";

export default function sitemap() {
  const baseUrl = getBaseUrl();
  const routes = ["/", "/services", "/work", "/blog", "/contact", "/resume"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changefreq: "monthly",
    priority: 0.7,
    lastmod: new Date(),
  }));
}
