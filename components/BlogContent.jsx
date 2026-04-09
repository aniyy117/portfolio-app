"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

export default function BlogContent({ articles }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2.6, duration: 0.4 },
            }}
            className="text-center xl:text-left"
          >
            <h1 className="h1 mb-4">Latest Articles</h1>
            <p className="text-white/60 max-w-[500px]">
              Insights and tutorials on modern web development, performance
              optimization, and frontend architecture.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.8, duration: 0.4 },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[30px]"
          >
            {articles.length === 0 && (
              <div className="text-center text-white/60 py-12">
                <p>No articles yet. Check back soon!</p>
              </div>
            )}

            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2.5 + index * 0.1, duration: 0.4 },
                }}
                className="group bg-[#232329] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/20 transition-all duration-500"
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-white/60 text-sm">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 mb-6 flex-1 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm">
                        {article.readTime}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-accent text-sm font-semibold">
                        {article.platform}
                      </span>
                    </div>
                    <Link
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                    >
                      <BsArrowUpRight className="text-xl" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dev.to Profile Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 3, duration: 0.4 },
            }}
            className="text-center mt-12"
          >
            <p className="text-white/60 mb-4">
              {articles.length > 0
                ? "Explore more articles and tutorials on my Dev.to profile"
                : "No articles published yet. Check back soon!"}
            </p>
            <Link
              href="https://dev.to/aniyy117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent hover:bg-accent hover:text-primary transition-all duration-300 rounded-lg font-semibold"
            >
              <span>Visit My Dev.to Profile</span>
              <BsArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
