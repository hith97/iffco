import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // ✅ replace with your logo

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Remove after everything loads (2s demo, can be longer)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader Overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700 ${
          loading ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <img
          src={logo}
          alt="Loading..."
          className="w-[250px] animate-pulse"
        />
      </div>

      {/* Main Site */}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
        {children}
      </div>
    </>
  );
}
