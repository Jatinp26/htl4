import Image from "next/image";
import Marquee from "@/components/magicui/marquee";

export default function EventGlimpseSlider() {
    const eventImages = [
        { src: "/images/eventImages/Event-1.webp", alt: "Event-1" },
        { src: "/images/eventImages/Event-2.webp", alt: "Event-2" },
        { src: "/images/eventImages/Event-3.webp", alt: "Event-3" },
    ];

    return (
        <Marquee pauseOnHover={false} className="[--duration:30s]">
            {eventImages.map((image, index) => (
                <div 
                    key={index} 
                    className="flex items-center gap-1 justify-center h-[205.5px]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="object-contain max-sm:rounded-sm rounded-md h-full w-auto"
                    />
                </div>
            ))}
        </Marquee>
    );
}
