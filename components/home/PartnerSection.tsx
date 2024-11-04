import Image from "next/image";
import Section from "../common/Section";

export default function PartnerSection() {
  const partners = [
    { src: "/images/partners/Logo-1.webp", alt: "Polygon" },
    { src: "/images/partners/Logo-2.webp", alt: "Manta Network" },
    { src: "/images/partners/Logo-3.webp", alt: "WalletConnect" },
    { src: "/images/partners/Logo-4.webp", alt: "Telos" },
    { src: "/images/partners/Logo-5.webp", alt: "Dab Club" },
    { src: "/images/partners/Logo-6.webp", alt: "Dojima" },
    { src: "/images/partners/Logo-7.webp", alt: "GitHub" },
    { src: "/images/partners/Logo-8.webp", alt: "Soonami.io" },
    { src: "/images/partners/Logo-10.webp", alt: "ChainGPT" },
    { src: "/images/partners/Logo-11.webp", alt: "Aptos" },
    { src: "/images/partners/Logo-12.webp", alt: "Bitget Wallet" },
    { src: "/images/partners/Logo-13.webp", alt: "Spheron" },
    { src: "/images/partners/Logo-14.webp", alt: "DigitalOcean" },
    { src: "/images/partners/Logo-15.webp", alt: "Levitate Labs" },
    { src: "/images/partners/Logo-16.webp", alt: "Base" },
  ];

  return (
    <Section id="partners">
      <h2 className="text-white text-center font-semibold text-2xl sm:text-4xl lg:text-4xl mb-6 sm:mb-12 lg:mb-12">
        Supported by{" "}
        <span className="bg-gradient-text bg-clip-text text-transparent">
          Partners
        </span>{" "}
        Across the Space
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-3 lg:gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[302px] h-[151px] border border-[#2c2c2c] bg-opacity-10 rounded-lg"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={32}
              className="pointer-events-none grayscale"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
