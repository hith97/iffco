export default function CoreObjective({ data }) {
  if (!data) return null;

  const { text, image, title, blocks } = data;

  return (
    <div className="w-full">
      {/* Company Overview Section */}
        <div className="w-full bg-[#F5F6E8]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-between">
            <div className="w-[45%] lg:pr-8">
              <div className="p-6">
                <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: text }}
            />
              </div>
            </div>

            <div className="w-[40%] overflow-hidden rightimg caseimg">
              <img
                src={image}
                alt="IFFCO-MC team members in office setting"
                className="w-full"
              />
            </div>
          </div>
        </div>
      {/* Core Objective Blocks (No Map) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <h2 className="h2 mb-10">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="text-center p-6 md:p-8 lg:p-10 bg-[#F5F6E8] text-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div
              className="space-y-2"
              dangerouslySetInnerHTML={{ __html: blocks[0] }}
            />
          </div>

          <div className="text-center p-6 md:p-8 lg:p-10 bg-[#008C44] text-white shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div
              className="space-y-2"
              dangerouslySetInnerHTML={{ __html: blocks[1] }}
            />
          </div>

          <div className="text-center p-6 md:p-8 lg:p-10 bg-[#008C44] text-white shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div
              className="space-y-2"
              dangerouslySetInnerHTML={{ __html: blocks[2] }}
            />
          </div>

          <div className="text-center p-6 md:p-8 lg:p-10 bg-[#F5F6E8] text-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div
              className="space-y-2"
              dangerouslySetInnerHTML={{ __html: blocks[3] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
