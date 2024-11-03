import Image from "next/image";
import Marquee from "@/components/magicui/marquee";

export default function EventGlimpseSlider() {
  const eventImages = [
    {
      src: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386923/website/global%20presence/IMG20240316162628_agcz2x.jpg",
      alt: "Event-1",
    },
    {
      src: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386921/website/global%20presence/GWnNlZwbgAAzy7x_bqraaq.jpg",
      alt: "Event-2",
    },
    {
      src: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386920/website/global%20presence/GWnO4moa4AAK209_ospv5t.jpg",
      alt: "Event-3",
    },
    {
      src: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386918/website/global%20presence/GT9r2OQW8AAwe3l_etzsyy.jpg",
      alt: "Event-3",
    },
    {
      src: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386917/website/global%20presence/GI7pcWSWkAAkS3D_f9kr3n.jpg",
      alt: "Event-3",
    },
  ];

  return (
    <Marquee pauseOnHover={false} className="[--duration:30s]">
      {eventImages.map((image, index) => (
        <div
          key={index}
          className="flex items-center gap-1 justify-center h-[205.5px]"
        >
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
