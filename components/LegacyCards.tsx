import Image from "next/image";
import Marquee from "@/components/magicui/marquee";

export default function LegacyCards() {
  const events = [
    {
      title: "Chapter-1",
      subtitle:
        "Where the aim for creating an impact-driven community was born!",
      img1: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386916/website/chapter1/1_h3vkmx.png",
      img2: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386913/website/chapter1/2_bpjls8.png",
      img4: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386915/website/chapter1/3_khfska.png",
    },
    {
      title: "Chapter-2",
      subtitle:
        "An in-person hackathon that gathered like-minded people to craft wonders using technologies.",
      img1: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386963/website/chapter2/Hacktheleagu420_cklgdl.jpg",
      img2: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386934/website/chapter2/Hacktheleagu387_trvn95.jpg",
    },
    {
      title: "Meetup-Series",
      subtitle:
        "6 City meet-ups packed by powerful speakers and workshop sessions created a stir among hackers!",
      img1: "https://res.cloudinary.com/hack-the-league/image/upload/v1730625479/website/meetups/sdwzarajvjib8agooak8.png",
      img2: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386931/website/meetups/IMG20221113161402_yspe8l.jpg",
      img3: "https://res.cloudinary.com/hack-the-league/image/upload/v1730625477/website/meetups/knqgahmefdcip11tm48a.png",
    },
    {
      title: "Chapter-3",
      subtitle: "An Aim for Global Impact",
      img1: "https://res.cloudinary.com/hack-the-league/image/upload/v1730387026/website/chapter%203/ab3223a2-9613-4e18-8d79-80407bf8546f.png",
      img2: "https://res.cloudinary.com/hack-the-league/image/upload/v1730386933/website/chapter%203/HTL-430_yqx6am.jpg",
    },
  ];
  return (
    <div>
      {/* Marquee for sliding content */}
      <Marquee pauseOnHover={true} className="[--duration:30s]">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4">
            {/* Left Image */}
            <div className="rounded-lg overflow-hidden shadow-lg max-sm:rounded-md  relative max-sm:w-[205.5px] max-sm:h-[205.5px] w-[411px] h-[411px] flex flex-col gap-6">
              {event.title == "Chapter-1" ? (
                <div className="flex flex-col gap-4 rounded-lg">
                  <div className="relative w-full h-[200px] rounded-lg bg-white">
                    <Image
                      src={event.img1}
                      alt={`Event Image 1 for ${event.title}`}
                      className="rounded-lg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="relative w-full h-[200px] rounded-lg bg-white ">
                    <Image
                      src={event?.img4 || ""}
                      alt={`Event Image 4 for ${event.title}`}
                      className="rounded-lg"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={event.img1}
                  alt={`Event Image 1 for ${event.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl max-sm:rounded-md "
                />
              )}
              <Image
                src={event.img1}
                alt={`Event Image 1 for ${event.title}`}
                className="w-full h-1/2"
                width={400}
                height={499}
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
              <div className="flex flex-col items-center justify-center w-full border-[#2c2c2c] border bg-[#121212] h-1/2 max-sm:rounded-md rounded-lg shadow-lg">
                <h3 className="max-sm:text-2xl text-4xl font-semibold text-blue-400 text-center">
                  {event.title}
                </h3>
                <p className="text-white max-sm:text-xs w-3/4 my-4 text-center">
                  {event.subtitle}
                </p>
              </div>
            </div>
            {event?.img3 && (
              <div className="rounded-lg overflow-hidden shadow-lg max-sm:rounded-md  relative max-sm:w-[205.5px] max-sm:h-[205.5px] w-[411px] h-[411px]">
                <Image
                  src={event.img3}
                  alt={`Event Image 1 for ${event.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl max-sm:rounded-md "
                />
              </div>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
