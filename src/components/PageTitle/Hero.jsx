import banner from "../../assets/banner.jpg";

export default function HeroTitle({ title }) {
  return (
    <section
      className="relative flex items-center justify-center bannermain"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container">
        <div className="py-[90px]">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold relative z-[1]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
