import React from "react";
import { useState , useEffect } from "react"
import { Phone, Navigation, MapPin } from "lucide-react"
import confarmer from "../../assets/confarmer.png"

function WhereContact() {
    const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setMapLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])


      const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleGetDirection = (address) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }
  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <>
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form and Image Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white">
              <div className="mb-6">
                <p className="text-[#ED1C24] text-lg font-medium mb-2">
                  Have Questions?
                </p>
                <h2 className="">
                  Send us a Message
                </h2>
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

                <div>
                  <textarea
                    name="query"
                    placeholder="Your Query"
                    rows="4"
                    value={formData.query}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-md bg-[#F5F6E8] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Get In Touch
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
              <img
                src={confarmer}
                alt="Farmer with wheat"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Office Information and Map Section */}
          
        </div>
      </div>
       <div className="relative w-full h-screen overflow-hidden m-0">
      {/* Full Background Google Map */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8234567890123!2d77.0424!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sSector%2030%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IFFCO-MC Location Map"
          className="w-full h-full object-cover"
        ></iframe>

        {/* Map Loading Overlay */}
        {!mapLoaded && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Map...</p>
            </div>
          </div>
        )}
      </div>

      {/* Overlay Information Card */}
      <div className="absolute inset-0 flex items-center justify-start p-4 md:p-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 md:p-8 max-w-md w-full ml-0 md:ml-8">
          {/* Corporate Office Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-green-600">Corporate Office</h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                IFFCO-MC Crop Science Private Limited
              </h3>
              <p className="text-sm text-gray-600 italic">(A Joint Venture of IFFCO & Mitsubishi Corporation)</p>

              <div className=" text-gray-700">
                <p>Surinder Jakhar Bhavan, IFFCO Tower-B<br />
                3rd Floor, Plot. No. 3, Sector 32,<br />
                Gurugram, Haryana-122003.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => handlePhoneCall("+91-9599947001")}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91-9599947001</span>
                </button>

                <button
                  onClick={() =>
                    handleGetDirection(
                      "Surinder Jakhar Bhavan, IFFCO Tower-B, 3rd Floor, Plot. No. 3, Sector 32, Gurugram, Haryana-122003",
                    )
                  }
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 justify-center"
                >
                  <Navigation className="w-4 h-4" />
                  Get Direction
                </button>
              </div>
            </div>
          </div>

          {/* Registered Office Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">Registered Office</h3>

            <div className="space-y-3">
              <div className="space-y-1 text-gray-700">
                <p>IFFCO Sadan, C-1, District Centre, Saket Place <br/> New Delhi-110017</p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleGetDirection("IFFCO Sadan, C-1, District Centre, Saket Place, New Delhi-110017")}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Get Direction
                </button>
              </div>
            </div>
          </div>

          {/* Location Marker Indicator */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Optional: Map Controls Overlay */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="flex flex-col gap-2">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <span className="text-lg font-bold">−</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default WhereContact;
