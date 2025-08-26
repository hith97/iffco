import React from "react";
import { useState, useEffect } from "react";
import confarmer from "../../assets/confarmer2.png";

function CareerContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <>
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form and Image Section */}
          <h2 className="text-center mb-[50px]">Explore Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white">
              <div className="mb-6">
                <p className="text-[#000000] text-lg mb-2">
                  To apply or express interest, write to us at{" "}
                  <span className="text-[#ED1C24]">careers@iffcomc.in</span> or fill in the below details
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-md bg-[#F5F6E8] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-md bg-[#F5F6E8] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-md bg-[#F5F6E8] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="interest"
                    placeholder="Interested Area"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-md bg-[#F5F6E8] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
              <img
                src={confarmer}
                alt="Farmer with wheat "
                className="h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Office Information and Map Section */}
        </div>
      </div>
    </>
  );
}

export default CareerContact;
