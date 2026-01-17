import { Button } from "@/components/Button";
import { heroData } from "@/data/data";

const HeroSection = () => (
  <div
    id="home"
    className="flex flex-col items-center justify-center gap-2 h-screen "
  >
    <p className="text-white text-[10px] sm:text-xs lg:text-sm px-3 py-px bg-opacity-10 bg-white rounded-full ">
      {heroData.subtitle}
    </p>
    <div className="flex flex-col">
      <h1
        className="text-white text-8xl sm:text-9xl lg:text-[10rem] text-center"
        style={{ fontFamily: "JUSTICE_LEAGUE" }}
      >
        {heroData.title}
      </h1>
      <h2
        className="bg-gradient-text-1 bg-clip-text text-center text-transparent text-9xl sm:text-10xl lg:text-[12rem] -mt-3 lg:-mt-9"
        style={{ fontFamily: "JUSTICE_LEAGUE" }}
      >
        {heroData.tagline}
      </h2>
    </div>
    <div className="flex gap-2 sm:gap-4 lg:gap-5">
      {heroData.buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          small={true}
          outline={button.outline}
          link={button.link}
        />
      ))}
    </div>
  </div>
);

export default HeroSection;
