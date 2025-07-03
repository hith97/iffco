import aboutimg from '../../assets/aboutimg.png'

export default function AboutSection() {
  return (
    <section className="w-full bg-yellow-50 py-12 md:py-16 lg:py-20 aboutsection">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 lg:pr-8">
            <h2 className="text-green-600 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Genuine Quality Agrochemicals
              <br />
              at Reasonable Price !
            </h2>

            <p>
              IFFCO-MC Crop Science Pvt. Ltd. (IFFCO-MC), a joint venture between Indian Farmers Fertiliser Cooperative
              Limited (IFFCO) and Mitsubishi Corporation, Japan (51:49 equity), was incorporated on 28th August 2018.
              Operating across India, IFFCO-MC offers a comprehensive range of crop protection solutions. To ensure
              quality and farmer confidence, the company has established a dedicated manufacturing facility.
            </p>

            <button className="text-green-600 font-bold flex items-center hover:text-green-700 transition-colors duration-200 group">
              Read More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={aboutimg}
              alt="Plant growth stages in coins"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
