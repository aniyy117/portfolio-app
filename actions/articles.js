"use server";

export async function getArticles() {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=aniyy117&per_page=10",
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const articles = await response.json();

    // Transform Dev.to data to match our schema
    const formattedArticles = articles.map((article) => {
      const tags = article.tag_list ?? [];
      const description =
        article.description ||
        (article.body_markdown
          ? article.body_markdown.substring(0, 200)
          : article.title);

      return {
        id: article.id,
        title: article.title,
        description,
        category: tags[0] || "Web Development",
        readTime: `${Math.ceil(article.reading_time_minutes || 1)} min read`,
        date: new Date(article.published_at).getFullYear(),
        tags: tags.slice(0, 5),
        link: article.url,
        platform: "Dev.to",
        image: article.cover_image,
      };
    });

    return formattedArticles;
  } catch (error) {
    return [];
  }
}
