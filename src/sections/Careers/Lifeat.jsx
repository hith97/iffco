import React, { useEffect, useState } from "react";

function Lifeat() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://iffcomcbackend.iffcomc.in/wp-json/wp/v2/pages/660")
      .then((res) => res.json())
      .then((data) => {
        const acf = data.acf;
        if (acf) {
          // Collect all 8 images dynamically
          const imgs = Object.keys(acf)
            .filter((key) => key.startsWith("career_image_"))
            .map((key) => acf[key]);
          setImages(imgs);
        }
      })
      .catch((err) => console.error("Failed to fetch Life at IFFCO images", err));
  }, []);

  return (
    <section className="lifeat py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-10">
          Life at IFFCO-MC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Career Life ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lifeat;
