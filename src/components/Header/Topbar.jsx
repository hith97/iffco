import { useState } from "react"

export function Topbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English (UK)")

  const languages = ["English (UK)","Hindi"]

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end items-center h-10 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <span>Change Language</span>
            <span>|</span>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {selectedLanguage}
                <svg
                  className={`w-3 h-3 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-32" style={{ zIndex: 100 }}>
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        setSelectedLanguage(language)
                        setIsLanguageOpen(false)
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
