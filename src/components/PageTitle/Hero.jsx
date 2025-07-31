import banner from "../../assets/banner.jpg";

export default function HeroTitle({ title, imageUrl }) {
  const backgroundImage = imageUrl || banner;

  return (
    <section
      className="relative flex items-center justify-center bannermain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center  top 30%",
      }}
    >
      <div className="container">
        <div className="py-[90px]">
          <h1 className="max-w-[370px] text-white text-3xl md:text-4xl lg:text-5xl font-bold relative z-[1]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
