"use client";

import { useState } from "react";
import footerbg from "../../assets/footerbg.jpg";
import logo from "../../assets/footerlogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const socialIcons = [
    { icon: "facebook-f", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "youtube", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "linkedin-in", href: "#" },
  ];

  return (
    <footer
      className="w-full text-white bg-[#008C44] bg-blend-multiply bg-center bg-cover"
      style={{
        backgroundImage: `url(${footerbg})`,
      }}
    >
      {/* Top Section */}
      <div className="border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Logo + Social Icons */}
            <div className="w-full lg:w-[30%] space-y-4">
              <img src={logo} alt="Logo" className="" />
              <div className="flex gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white text-green-600 rounded-full flex items-center justify-center hover:bg-green-50 transition-colors duration-200"
                  >
                    <i className={`fab fa-${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links Section */}
            <div className="w-full lg:w-[70%] flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
              {/* Column 1 */}
              <div className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About IFFCO-MC", href: "/aboutus" },
                  { name: "Vision and Mission", href: "/vision-mission" },
                  { name: "Quality Policy", href: "/quality-policy" },
                  { name: "Board of Directors", href: "/aboutus#board-of-director" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block text-white hover:text-green-200 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                {[
                  { name: "Products", href: "/products" },
                  { name: "Events/Testimonials", href: "/events" },
                  { name: "CSR Policy", href: "/csr-policy" },
                  { name: "Video", href: "/videos" },
                  { name: "KSBY", href: "/ksby" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block text-white hover:text-green-200 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                {[
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Career", href: "/career" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block font-medium text-white hover:text-green-200 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="space-y-2 text-sm">
              <p className="hover:text-white cursor-pointer text-white duration-200">
                https://www.iffco-mc.com/contact
              </p>
              <p className="hover:text-white cursor-pointer text-white duration-200">
                https://www.iffco-mc.com/products/herbicides
              </p>
            </div>

            <div className="max-w-md">
              <p className="text-lg mb-4 text-white">
                Subscribe to our newsletter to get the latest updates about our
                products & activities.
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-lg transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-green-200 text-center">
            ™ & Trademarks of IFFCO-MC Crop Science Pvt. Ltd. and its affiliated
            companies. ©2023 IFFCO-MC Crop Science Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
