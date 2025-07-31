import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCSRPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8082/ifc/wp-json/wp/v2/csr/${id}?_embed`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching single news:", err));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <section className="blogimg">
      <div className="container">
        <div className="blogimgcom overflow-hidden rounded-[15px] h-auto sm:h-[400px] sm:rounded-[300px] w-full">
          <img
            src={
              news._embedded?.["wp:featuredmedia"]?.[0]?.source_url
            }
            alt=""
          />
        </div>
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