import { getBaseUrl } from "@/lib/utils";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
