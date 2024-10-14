/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://your-portfolio-domain.com", // Replace with your website URL
  generateRobotsTxt: true, // Generates robots.txt file
  changefreq: "weekly", // How often your pages are updated
  priority: 0.7, // Default priority for URLs
  sitemapSize: 5000, // Limit for the number of URLs in the sitemap
  generateIndexSitemap: false, // Set this to true if you want index sitemaps

  // Additional pages
  additionalPaths: async (config) => [
    await config.transform("/work", "Work"), // Work page
    await config.transform("/services", "Services"), // Services page
    await config.transform("/contact", "Contact"), // Contact page
    await config.transform("/resume", "Resume"), // Resume page
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*", // Applies to all user-agents (search engine crawlers)
        allow: "/", // Allows crawling of all pages
      },
      // You can disallow specific pages or directories if needed
      // { userAgent: '*', disallow: '/secret-page' }
    ],
  },
};
