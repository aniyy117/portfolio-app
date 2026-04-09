"use client";

import React from "react";
import BlogContent from "@/components/BlogContent";

export default function BlogPageClient({ articles }) {
  return <BlogContent articles={articles} />;
}
