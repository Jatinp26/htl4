import Image from "next/image";
import Marquee from "@/components/magicui/marquee";

export default function PartnerSlider() {
    const partners = [
        { src: "/images/presence/Partner-1.webp", alt: "dao-tokyo" },
        { src: "/images/presence/Partner-2.webp", alt: "devcon" },
        { src: "/images/presence/Partner-3.webp", alt: "token2049" },
        { src: "/images/presence/Partner-4.webp", alt: "webxasia" },
    ];

    return (
        <Marquee pauseOnHover={false} className="[--duration:30s] bg-[#080808] border-[#2c2c2c] border-y">
            {partners.map((partner, index) => (
                <div
                    key={index}
                    className=" flex items-center justify-center"
                >
                    <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={120}
                        height={60}
                        className="pointer-events-none m-9"
                    />
                </div>
            ))}
        </Marquee>
    );
}
