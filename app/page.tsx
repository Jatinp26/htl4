import Image from "next/image";
import BgImage from "@/public/images/hero/Background_Image.webp"
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import LegacySection from "@/components/home/LegacySection";
import PartnerSection from "@/components/home/PartnerSection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      {/* Background Image */}
      <Image src={BgImage}
        priority
        layout="fill"
        className="-z-10 absolute h-screen"
        alt="Background Image"
      />
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <LegacySection />
      <PartnerSection />
    </div>
  );
}
