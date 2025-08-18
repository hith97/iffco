import { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const productDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  const productSubItems = [
    { name: "Herbicide", href: "/products#herbicide" },
    { name: "Insecticide", href: "/products#insecticides" },
    { name: "Fungicide", href: "/products#fungicides" },
    { name: "PGR", href: "/products#pgr" },
    { name: "Biological", href: "/products#new-biologicals" },
  ];

  const aboutSubItems = [
    { name: "Overview", href: "/whoweare#overview" },
    { name: "About IFFCO-MC", href: "/whatweare#about" },
    { name: "Presence", href: "/whereweare#presence" },
  ];

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Products", href: "/products" },
    { name: "KSBY", href: "/whatweare#ksby" },
    { name: "CSR", href: "/csr" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/whereweare#contact" },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target)
      ) {
        setIsProductDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center max-w-[150px]">
            <div className="text-white px-4 py-2 rounded-t-lg font-bold text-lg">
              <img src={logo} alt="Logo" className="w-full" />
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.name === "Products") {
                return (
                  <div
                    key="Products"
                    className="relative"
                    ref={productDropdownRef}
                  >
                    <button
                      onClick={() =>
                        setIsProductDropdownOpen(!isProductDropdownOpen)
                      }
                      className="text-gray-700 hover:text-green-600 font-small transition-colors duration-200 flex items-center"
                    >
                      Products
                      <i className="fa-solid fa-sort-down mt-[0px] ml-2 text-[#ED1C24]"></i>
                    </button>
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md w-48 z-50 transform transition-all duration-200 origin-top scale-95 opacity-0 ${
                        isProductDropdownOpen
                          ? "opacity-100 scale-100"
                          : "pointer-events-none"
                      }`}
                    >
                      {productSubItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-md text-gray-700 hover:bg-green-100 hover:text-green-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else if (item.name === "About Us") {
                return (
                  <div
                    key="About Us"
                    className="relative"
                    ref={aboutDropdownRef}
                  >
                    <button
                      onClick={() =>
                        setIsAboutDropdownOpen(!isAboutDropdownOpen)
                      }
                      className="text-gray-700 hover:text-green-600 font-small transition-colors duration-200 flex items-center"
                    >
                      About Us
                      <i className="fa-solid fa-sort-down mt-[0px] ml-2 text-[#ED1C24]"></i>
                    </button>
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48 z-50 transform transition-all duration-200 origin-top scale-95 opacity-0 ${
                        isAboutDropdownOpen
                          ? "opacity-100 scale-100"
                          : "pointer-events-none"
                      }`}
                    >
                      {aboutSubItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-md text-gray-700 hover:bg-green-100 hover:text-green-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-green-600 font-small transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden max-w-3xl md:flex items-center">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for products and categories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-3xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for products and categories"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Mobile Navigation Links */}
              {navigationItems.map((item) => {
                if (item.name === "Products") {
                  return (
                    <div key="Products" className="space-y-1">
                      <button
                        onClick={() =>
                          setIsProductDropdownOpen(!isProductDropdownOpen)
                        }
                        className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                      >
                        Products
                      </button>
                      {isProductDropdownOpen && (
                        <div className="pl-4">
                          {productSubItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block text-sm text-gray-600 hover:text-green-600 py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else if (item.name === "About Us") {
                  return (
                    <div key="About Us" className="space-y-1">
                      <button
                        onClick={() =>
                          setIsAboutDropdownOpen(!isAboutDropdownOpen)
                        }
                        className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                      >
                        About Us
                      </button>
                      {isAboutDropdownOpen && (
                        <div className="pl-4">
                          {aboutSubItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block text-sm text-gray-600 hover:text-green-600 py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
