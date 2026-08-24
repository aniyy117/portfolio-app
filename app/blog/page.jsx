import React from "react";
import BlogPageClient from "@/components/BlogPageClient";
import { getArticles } from "@/actions/articles";

export default async function BlogPage() {
  const articles = await getArticles();

  return <BlogPageClient articles={articles} />;
}
