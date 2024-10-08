import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import Image1 from "@/public/images/Image-1.webp";
import Image2 from "@/public/images/Image-2.webp";


export default function LegacyCards() {
    const events = [
        {
            title: "Chapter-1",
            subtitle: "The Beginning of the Journey",
            img1: Image1,
            img2: Image2,
        },
        {
            title: "Chapter-2",
            subtitle: "Next Steps",
            img1: Image1,
            img2: Image2,
        }
    ]
    return (
        <div >
            {/* Marquee for sliding content */}
            <Marquee pauseOnHover={true} className="[--duration:30s]">
                {events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                        {/* Left Image */}
                        <div className="rounded-lg overflow-hidden shadow-lg max-sm:rounded-md  relative max-sm:w-[205.5px] max-sm:h-[205.5px] w-[411px] h-[411px]">
                            <Image
                                src={event.img1}
                                alt={`Event Image 1 for ${event.title}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl max-sm:rounded-md "
                            />
                        </div>
                        {/* Right Section with Image 2 and Text */}
                        <div className="relative max-sm:w-[205.5px] max-sm:h-[205.5px] w-[411px] h-[411px] flex flex-col items-center gap-6 max-sm:gap-3">
                            <div className="h-1/2 w-full rounded-lg max-sm:rounded-md  overflow-hidden shadow-lg relative">
                                <Image
                                    src={event.img2}
                                    alt={`Event Image 2 for ${event.title}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl max-sm:rounded-md "
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center w-full bg-[#2c2c2c] h-1/2 max-sm:rounded-md rounded-lg shadow-lg">
                                <h3 className="max-sm:text-2xl text-4xl font-semibold text-blue-400 text-center">
                                    {event.title}
                                </h3>
                                <p className="text-white max-sm:text-xs text-lg text-center">
                                    {event.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}