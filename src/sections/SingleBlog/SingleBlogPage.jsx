import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleBlogPage() {
  const { id } = useParams(); // actually slug
  const [news, setNews] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setNews(data[0]); // WP returns array for slug query
      })
      .catch((err) => console.error("Error fetching single news:", err));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <section className="blogimg">
      <div className="container">
        <div className="blogimgcom overflow-hidden rounded-[15px] h-auto sm:h-[400px] sm:rounded-[300px] w-full">
          {news._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <img
              src={news._embedded["wp:featuredmedia"][0].source_url}
              alt={news.title.rendered}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="newcon blogcon mt-6">
          <h2
            className="text-[24px] sm:text-[40px]/[50px] font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: news.title.rendered }}
          />
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content.rendered }}
          />
        </div>
      </div>
    </section>
  );
}
