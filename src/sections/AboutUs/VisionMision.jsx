export default function VisionMision({ data }) {
  if (!data) return null;

  return (
    <>
      {/* Vision Section */}
      <div className="visiontop mb-8">
        <h2>Vision</h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden testiin">
          <div className="w-[60%] text-left p-[80px] pr-[20px]">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {data.visionText}
            </p>
          </div>

          <div className="w-[40%] overflow-hidden shadow-lg rightimg">
            <img
              src={data.visionImage}
              alt="vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="visiontop">
        <h2>{data.missionTitle}</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 lg:gap-8">
          {/* Mission Card 1 */}
          <div className="text-center group flex-1 min-h-[360px] flex flex-col">
            <div className="relative mb-[-65px]">
              <div className="w-[130px] h-[130px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44]">
                <img
                  src={data.missionIcon1}
                  alt="icon1"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F5F6E8] pt-[90px] pb-[10px] px-6 flex-1 flex items-center">
              <p className="text-black-700 text-lg">{data.missionText1}</p>
            </div>
          </div>

          {/* Mission Card 2 */}
          <div className="text-center group flex-1 min-h-[360px] flex flex-col">
            <div className="relative mb-[-65px]">
              <div className="w-[130px] h-[130px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#F5F6E8]">
                <img
                  src={data.missionIcon2}
                  alt="icon2"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-[#008C44] pt-[90px] pb-[10px] px-6 flex-1 flex items-center">
              <p className="text-white text-lg">{data.missionText2}</p>
            </div>
          </div>

          {/* Mission Card 3 */}
          <div className="text-center group flex-1 min-h-[360px] flex flex-col">
            <div className="relative mb-[-65px]">
              <div className="w-[130px] h-[130px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44]">
                <img
                  src={data.missionIcon3}
                  alt="icon3"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F5F6E8] pt-[90px] pb-[10px] px-6 flex-1 flex items-center">
              <p className="text-black-700 text-lg">{data.missionText3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
