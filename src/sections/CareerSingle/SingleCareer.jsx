import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCareerPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`https://covana.in/iffcobackend/wp-json/wp/v2/career/${id}?_embed`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching single news:", err));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <section className="blogimg careersingle">
      <div className="container">
        <div className="newcon">
          <h2 dangerouslySetInnerHTML={{ __html: news.title.rendered }} className="text-[24px] sm:text-[40px]/[50px]" />
          <div
            dangerouslySetInnerHTML={{ __html: news.content.rendered }}
          />
        </div>
      </div>
    </section>
  );
}