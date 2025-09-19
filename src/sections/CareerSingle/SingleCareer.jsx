import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCareerPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // ✅ control popup state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  useEffect(() => {
    fetch(`https://iffcomc.in/Iffcomcbackend/wp-json/wp/v2/career/${id}?_embed`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching single news:", err));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  // ✅ Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // 👉 You can use FormData to send to backend
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("resume", formData.resume);

    // Example POST request
    fetch("https://your-backend-api/apply", {
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Application submitted successfully!");
        setIsOpen(false);
        setFormData({ name: "", email: "", phone: "", resume: null });
      })
      .catch((err) => console.error("Error submitting form:", err));
  };

  return (
    <section className="blogimg careersingle">
      <div className="container">
        <div className="newcon">
          <h2
            dangerouslySetInnerHTML={{ __html: news.title.rendered }}
            className="text-[24px] sm:text-[40px]/[50px]"
          />
          <div
            dangerouslySetInnerHTML={{ __html: news.content.rendered }}
          />

          {/* ✅ Apply Now Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">Apply for this Job</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
