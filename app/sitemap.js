export default function sitemap() {
  const routes = [
    "/",
    "/services",
    "/work",
    "/contact",
    "/resume",
    "/resume?tab=about",
    "/resume?tab=experience",
    "/resume?tab=education",
    "/resume?tab=skills",
  ];

  return routes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    changefreq: "monthly",
    priority: 0.7,
    lastmod: new Date(),
  }));
}
