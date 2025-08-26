"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogGrid = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/posts?_embed") 
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.map((post) => ({
          id: post.id,
          slug: post.slug,
          title: post.title.rendered,
          date: new Date(post.date).toLocaleString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.svg",
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""), // remove HTML tags
        }));
        setBlogPosts(formattedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto md:py-[80px]">
      {/* Header */}
      <h1 className="h2 mb-8">Blogs</h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
             <Link
            to={`/blog/${post.slug}`} // ✅ slug-based route
            key={post.id}
            className="bg-white"
          >
          <div key={post.id} className="bg-white">
            {/* Blog Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Blog Content */}
            <div className="py-4">
              {/* Date */}
              <p className="text-sm text-[#717288] mb-2">{post.date}</p>

              {/* Title */}
              <h2 className="text-[20px] font-bold text-gray-900 mb-2 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.title }} />

            </div>
          </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default BlogGrid;
