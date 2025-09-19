import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import why4 from "../../assets/why4.png";

const WhyJoinIFFCO = () => {
  const benefits = [
    {
      title: "Collaborative Culture",
      description:
        "IFFCO-MC fosters an inclusive, Respectful and Collaborative environment where every team member's voice is heard and Innovation thrives.",
      image: why1,
    },
    {
      title: "Learning & Development",
      description:
        "IFFCO-MC invests in your Professional growth through Ongoing training, Skill enhancement and Career advancement Support, ensuring you're always Evolving.",
      image: why2,
    },
    {
      title: "Empowering Careers",
      description:
        "Here IFFCO and Aspirants to Supply Chain, Sales, Marketing, Operations, Finance and other domains can find challenges and growth.",
      image: why3,
    },
    {
      title: "Employee Wellbeing",
      description:
        "IFFCO-MC cares for our People through Comprehensive Benefits, Work-life balance and a Supportive work environment that prioritizes Life Balance.",
      image: why4,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-center">Why Join IFFCO-MC?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center whyiffcomain"
          >
            {/* Dynamic circular image background */}
            <div
              className="whyifimg"
              style={{ backgroundImage: `url(${benefit.image})` }}
            >
              <div className="text-white text-[18px] md:text-[25px] font-semibold px-2 leading-tight">
                {benefit.title}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs whyifcon">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinIFFCO;
