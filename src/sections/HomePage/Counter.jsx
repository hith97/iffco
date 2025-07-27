"use client"

import { useState, useEffect, useRef } from "react"
import staticon from "../../assets/staticn.png"

const statsData = [
  {
    icon: "🏆",
    count: 10,
    suffix: "+",
    label: "Years of Excellence",
    color: "green",
  },
  {
    icon: "📍",
    count: 18,
    suffix: "",
    label: "States Covered",
    color: "red",
  },
  {
    icon: "🏭",
    count: 4,
    suffix: "",
    label: "Manufacturing Units",
    color: "green",
  },
  {
    icon: "🏢",
    count: 0,
    suffix: "000",
    label: "Warehouses Across India",
    color: "red",
  },
  {
    icon: "🚚",
    count: 10,
    suffix: "+",
    label: "Unique Distribution Network",
    color: "red",
  },
  {
    icon: "👥",
    count: 500,
    suffix: "+",
    label: "Dedicated Workforce",
    color: "red",
  },
  {
    icon: "🛒",
    count: 85,
    suffix: "+",
    label: "Product Basket",
    color: "red",
  },
  {
    icon: "🤝",
    count: 1,
    suffix: "",
    label: "Farmer Touchpoint",
    color: "green",
  },
  {
    icon: "🎧",
    count: 300,
    suffix: "+",
    label: "Farmer Service Centers",
    color: "red",
  },
  {
    icon: "🌱",
    count: 0,
    suffix: "000",
    label: "Farmer Societies",
    color: "red",
  },
  {
    icon: "🏪",
    count: 0,
    suffix: "000",
    label: "IFFCO Bazaar Outlets",
    color: "red",
  },
  {
    icon: "💰",
    count: 0,
    suffix: "000",
    label: "IFFDC",
    color: "red",
  },
  {
    icon: "📊",
    count: 0,
    suffix: "000",
    label: "CCDU",
    color: "red",
  },
  {
    icon: "✅",
    count: 0,
    suffix: "000",
    label: "KSBY Insurance Claim Delivered",
    color: "green",
  },
]

function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, shouldStart])

  return count
}

function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isIntersecting
}

function StatCard({ stat, shouldAnimate }) {
  const animatedCount = useCountUp(stat.count, 2000, shouldAnimate)

  return (
    <div className="p-6 text-center transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
      <div className="text-4xl mb-3 w-[110px] h-[110px] bg-[#F5F6E8] rounded-full m-auto p-4">
        <img src={staticon} alt="icon" className="w-full h-full object-contain" />
      </div>
      <div className={`text-[40px] font-bold mb-2 text-red-500`}>
        {animatedCount}
        {stat.suffix}
      </div>
      <div className="text-lg text-[#008C44] leading-tight">{stat.label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  })

  return (
    <div ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} shouldAnimate={isVisible} />
          ))}
        </div>
      </div>
    </div>
  )
}
