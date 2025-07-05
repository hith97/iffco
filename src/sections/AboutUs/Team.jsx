"use client"

import { useState } from "react"
import TeamImg from "../../assets/team1.jpg"

export default function BoardOfDirectors() {
  const [selectedDirector, setSelectedDirector] = useState(null)

  const directors = [
    {
      id: 1,
      name: "Rakesh Kapu",
      title: "Chairman",
      image: TeamImg,
      bio: "Shri Rakesh Kapur serves as the Chairman of IFFCO-MC. A former Indian Revenue Service (IRS) officer from the 1978 batch, he holds a degree in Mechanical Engineering from the prestigious Indian Institute of Technology (IIT), Delhi and a postgraduate diploma in Management from the Indian Institute of Management (IIM).",
      detailedBio:
        "With a wealth of experience in finance, management, and strategic business planning, Mr. Kapur brings invaluable leadership to the board. His extensive global exposure includes participation in numerous international business seminars and engagements. He also serves as a director on the boards of several private and public limited companies, including IFFCO-Tokio General Insurance Company Limited, IFFCO Kisan Sanchar Limited, IFFCO SEZ Limited, and the Fertilizer Association of India.",
    },
    {
      id: 2,
      name: "Hajime Kito",
      title: "Vice-Chairman",
      image: TeamImg,
      bio: "Mr. Hajime Kito serves as the Vice-Chairman of IFFCO-MC, representing Mitsubishi Corporation's interests in the joint venture.",
      detailedBio:
        "With extensive experience in international business and agricultural solutions, Mr. Kito brings valuable insights from Mitsubishi Corporation's global operations. His leadership has been instrumental in establishing strong partnerships and driving innovation in crop protection solutions across Asian markets.",
    },
    {
      id: 3,
      name: "Manoj Kumar Varshney",
      title: "MD & CEO",
      image: TeamImg,
      bio: "Mr. Manoj Kumar Varshney serves as the Managing Director & CEO of IFFCO-MC, leading the company's strategic operations and growth initiatives.",
      detailedBio:
        "With comprehensive experience in agricultural business and crop protection solutions, Mr. Varshney has been pivotal in expanding IFFCO-MC's presence across India. His leadership focuses on farmer-centric solutions and sustainable agricultural practices, ensuring the company's mission of providing quality crop protection products to Indian farmers.",
    },
  ]

  const openModal = (director) => {
    setSelectedDirector(director)
  }

  const closeModal = () => {
    setSelectedDirector(null)
  }

  return (
    <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
            Board of Directors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {directors.map((director) => (
              <div key={director.id} className="text-center group cursor-pointer" onClick={() => openModal(director)}>
                <div className="relative mb-[-80px]">
                  <div className="w-60 h-60 mx-auto rounded-full overflow-hidden transition-all duration-300">
                    <img
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-[#F5F6E8] pt-[100px] pb-[10px] px-4">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-2 group-hover:text-green-700 transition-colors duration-200">
                  {director.name}
                </h3>
                <p className="text-gray-700 text-lg font-medium">{director.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Modal */}
      {selectedDirector && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 md:p-8 lg:p-10">
              {/* Modal Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={selectedDirector.image || "/placeholder.svg"}
                    alt={selectedDirector.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-green-600 text-2xl md:text-3xl font-bold mb-2">{selectedDirector.name}</h3>
                  <p className="text-gray-700 text-lg md:text-xl font-medium">{selectedDirector.title}</p>
                </div>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">{selectedDirector.bio}</p>
                <p className="text-base md:text-lg">{selectedDirector.detailedBio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
