import React from "react";
import infraimg from "../../assets/infraimg.png";
import { useState, useEffect, useRef } from "react";
import staticon from "../../assets/staticn.png";
import staticon2 from "../../assets/staticn2.png";
import staticon3 from "../../assets/staticn3.png";
import staticon4 from "../../assets/staticn4.png";
import staticon5 from "../../assets/staticn5.png";
import staticon6 from "../../assets/staticn6.png";
import staticon7 from "../../assets/staticn7.png";
import staticon8 from "../../assets/staticn8.png";
import staticon9 from "../../assets/staticn9.png";
import staticon10 from "../../assets/staticn10.png";

const statsData = [
  {
    icon: staticon,
    count: 10,
    suffix: "+",
    label: "Years of Excellence",
    color: "green",
  },
  {
    icon: staticon2,
    count: 18,
    suffix: "",
    label: "States Covered",
    color: "red",
  },
  {
    icon: staticon3,
    count: 4,
    suffix: "",
    label: "Manufacturing Facilities (Tollers)",
    color: "green",
  },
  {
    icon: staticon4,
    count: 3,
    suffix: " Cr +",
    label: "KSBY Claims Settled",
    color: "red",
  },
  {
    icon: staticon5,
    count: 12000,
    suffix: "+",
    label: "Unique Distribution Network",
    color: "red",
  },
  {
    icon: staticon6,
    count: 500,
    suffix: "+",
    label: "Dedicated Workforce",
    color: "red",
  },
  {
    icon: staticon7,
    count: 85,
    suffix: "+",
    label: "Product Basket",
    color: "red",
  },
  {
    icon: staticon8,
    count: 75,
    suffix: "+",
    label: "Farmer Service Centers",
    color: "green",
  },
  {
    icon: staticon9,
    count: 350,
    suffix: "+",
    label: "IFFCO Bazaar Outlets",
    color: "red",
  },
  {
    icon: staticon10,
    count: 3000,
    suffix: "+",
    label: "Primary Agriculture Co-operative Societies",
    color: "red",
  },
];

function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
}

function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

function StatCard({ stat, shouldAnimate }) {
  const animatedCount = useCountUp(stat.count, 2000, shouldAnimate);

  return (
    <div className="p-6 text-center transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
      <div className="text-4xl mb-3 w-[110px] h-[110px] bg-[#F5F6E8] rounded-full m-auto p-4 flex justify-center items-center">
        <img
          src={stat.icon}
          alt="icon"
          className="w-[60px] h-[60px] object-contain"
        />
      </div>
      <div className={`text-[40px] font-bold mb-2 text-red-500`}>
        {animatedCount}
        {stat.suffix}
      </div>
      <div className="text-lg text-[#008C44] leading-tight">{stat.label}</div>
    </div>
  );
}
function WhoInfra() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });
  return (
    <>
      <div className="container">
        <h2 className="text-center infratitle">Infrastructure & Resources</h2>
      </div>
      <div className="w-full py-12 md:py-16 lg:py-20 aboutsection whoinfra relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <p className="text-gray-800 leading-relaxed text-justify whitespace-pre-line para">
                IFFCO-MC has a strong and reliable infrastructure that supports
                our goal of serving farmers across the country. We have modern
                manufacturing units that produce high-quality crop protection
                products with strict quality checks. Our wide distribution
                network ensures timely delivery through warehouses, C&F agents,
                and local dealers. We also use digital tools & technology to
                support our field teams and help farmers with updates, services,
                and information in real time. With the right facilities, trained
                teams, and advanced systems, we are committed to reaching every
                farmer with safe, effective, and innovative agricultural
                solutions.
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src={infraimg}
                alt="About IFFCO-MC"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="pb-8 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} shouldAnimate={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoInfra;
