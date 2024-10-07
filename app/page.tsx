import Image from "next/image";
import BgImage from "@/public/images/Background_Image.webp"
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      {/* Background Image */}
      <Image src={BgImage}
        priority
        layout="responsive"
        className="-z-10 absolute"
        alt="Background Image"
      />
      {/* Sections */}
      <HeroSection />
      <AboutSection />
    </div>
  );
}
