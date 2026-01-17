import Image from "next/image";
import HTL_Footer from "@/public/images/footer/HTL_Footer.svg";
import Gradient from "@/public/images/footer/Gradient.png";
import {
  NewTwitterIcon,
  InstagramIcon,
  TelegramIcon,
} from "hugeicons-react";

// Define the arrays for the links
const aboutLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#aboutus" },
  { name: "Legacy", href: "#legacy" },
  { name: "Partners", href: "#partners" },
];

const exploreLinks = [
  { name: "Meetups", href: "https://chapter2-htl.vercel.app/meetups.html" },
  { name: "Luma Calendar", href: "https://lu.ma/HTLCalendar" },
  {
    name: "Partner with Us",
    href: "mailto:hacktheleague.legacy@gmail.com",
  },
];

const socialLinks = [
  {
    Icon: NewTwitterIcon,
    href: "https://x.com/HackTheLeague",
    label: "Twitter",
  },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/hack_the_league/",
    label: "Instagram",
  },
  {
    Icon: TelegramIcon,
    href: "https://t.me/+MIhXmjjQxzA4N2I1",
    label: "Telegram",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full bg-[#060606] border-t gap-8 border-[#2c2c2c] rounded-t-3xl flex-col flex items-start pb-24 lg:pb-36 pt-6 sm:pt-12 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row w-full md:justify-between items-center md:items-start gap-6 z-10">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-sm:items-center">
          <div>
            <h2
              className="text-5xl lg:text-6xl text-white"
              style={{ fontFamily: "JUSTICE_LEAGUE" }}
            >
              HACK THE LEAGUE
            </h2>
            <p className="text-base lg:text-xl text-white">
              Go beyond your limits.
            </p>
          </div>
          {/* Follow Us */}
          <p className="text-white text-sm">Follow us</p>
          {/* Social Links */}
          <div className="flex gap-3 items-center">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-fit p-2 border border-[#2c2c2c] bg-none rounded-full hover:text-gray-400 transition-transform transform hover:scale-110"
              >
                <Icon size={24} strokeWidth={1} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-row justify-between max-sm:w-full md:gap-12">
          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-white sm:text-left text-xl mb-2">
              About
            </h3>
            <ul className="text-sm space-y-1">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-xs hover:text-gray-400"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-white max-sm:text-right text-xl mb-2">
              Explore
            </h3>
            <ul className="text-sm max-sm:text-right space-y-1">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-xs hover:text-gray-400 "
                    target="_blank"
                    rel="norefferer"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex w-full flex-row max-sm:gap-6 max-sm:items-start items-center max-sm:flex-col-reverse justify-between text-xs text-gray-400 z-10">
        <p className="text-gray-400">© 2024 Hack The League. All rights reserved.</p>
        <div className="flex gap-4 max-sm:w-full max-sm:justify-between">
          <a
            href="#code-of-conduct"
            className="hover:text-gray-300"
            aria-label="Code of Conduct"
          >
            Code of Conduct
          </a>
          {/* <a
            href="#partner"
            className="hover:text-gray-300"
            aria-label="Partner with us"
          >
            Partner with us
          </a> */}
        </div>
      </div>

      {/* Gradient and HTL_Footer Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="absolute inset-0 translate-y-1/2 flex items-center justify-center">
          <Image
            src={Gradient}
            alt="Gradient"
            layout="fill"
            objectFit="cover"
            className="z-0 -mt-28 sm:-mt-44 lg:-mt-52"
          />
          <Image
            src={HTL_Footer}
            alt="Footer Logo"
            layout="intrinsic"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
    </footer>
  );
}
