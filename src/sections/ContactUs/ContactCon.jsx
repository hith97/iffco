import building from "../../assets/building.png";
import telephone from "../../assets/telephone.png";

const ContactCon = () => {
  return (
    <div className="container my-[80px]">
      {/* Corporate Office Section */}
      <div className="mb-8">
        <h2 className="mb-6">Corporate Office</h2>

        <div className="bg-[#F5F6E8] p-2 sm:p-8 ">
          {/* Company Name */}
          <div className="text-center mb-8">
            <h3 className="mb-2 text-[28px] font-bold">
              IFFCO-MC Crop Science Private Limited
            </h3>
            <p className="text-lg text-gray-700 italic">
              (A Joint Venture of IFFCO & Mitsubishi Corporation)
            </p>
          </div>

          {/* Address and Phone Section */}
          <div className="flex items-start flex-wrap justify-center gap-6 sm:gap-0">
            {/* Address Section */}
            <div className="w-[100%] sm:w-[45%] flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={building}
                  alt="Building"
                  className="w-12"
                />
              </div>
              <div className="text-gray-700 ">
                <p className="text-lg mb-1">
                  Surinder Jakhar Bhavan, IFFCO Tower-B <br />
                  3rd Floor, Plot, No. 3, Sector 32, <br />
                  Gurugram, Haryana-122003.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-20 bg-gray-300 mx-8 hidden sm:inline-block"></div>

            {/* Phone Section */}
            <div className="flex items-center space-x-4 w-[100%] sm:w-[45%]">
              <img
                  src={telephone}
                  alt="Phone"
                  className="w-12"
                />
              <p className="text-lg mb-1">
                +91-9599947001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Office Section */}
      <div>
        <h1 className="text-4xl font-bold text-green-600 mb-6">
          Registered Office
        </h1>

        <div className="bg-[#F5F6E8] p-2 sm:p-8 max-w-xl">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
               <img
                  src={building}
                  alt="Building"
                  className="w-12"
                />
            </div>
            <div className="text-gray-700">
              <p className="text-lg mb-1">IFFCO Sadan, C-1, District Centre,</p>
              <p className="text-lg mb-1">Saket Place</p>
              <p className="text-lg">New Delhi-110017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCon;
