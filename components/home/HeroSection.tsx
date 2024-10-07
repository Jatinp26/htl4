// HeroSection.tsx
import { Button } from "@/components/Button";
import { heroData } from "@/data/data"; // Import hero data

const HeroSection = () => (
    <div className="flex flex-col items-center justify-center gap-2 h-full">
        <p className="text-white text-[10px] sm:text-xs lg:text-sm px-3 py-px bg-opacity-10 bg-white rounded-full">
            {heroData.subtitle}
        </p>
        <div className="flex flex-col">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl text-center" style={{ fontFamily: "JUSTICE_LEAGUE" }}>
                {heroData.title}
            </h1>
            <h2 className="bg-gradient-text-1 bg-clip-text text-transparent text-6xl sm:text-8xl lg:text-9xl -mt-3 lg:-mt-4" style={{ fontFamily: "JUSTICE_LEAGUE" }}>
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
