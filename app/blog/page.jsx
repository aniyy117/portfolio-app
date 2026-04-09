import React from "react";
import BlogPageClient from "@/components/BlogPageClient";
import PageTransition from "@/components/PageTranstition";
import { getArticles } from "@/actions/articles";

export const metadata = {
  title: "Blog",
  description:
    "Read articles about web development, Next.js, React, performance optimization, and frontend architecture.",
};

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <BlogPageClient articles={articles} />
        </div>
      </div>
    </PageTransition>
  );
}
