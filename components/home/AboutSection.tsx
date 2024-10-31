import Image from "next/image";
import {
  CodeIcon,
  EarthIcon,
  Folder03Icon,
  UserGroupIcon,
} from "hugeicons-react";
import AboutImage from "@/public/images/about/About_Image.webp";
import DevImage from "@/public/images/about/Developer_Image.webp";
import Section from "@/components/common/Section";

const AboutSection = () => {
  return (
    <Section id="aboutus">
      <h2 className="text-white text-center font-semibold text-2xl sm:text-4xl lg:text-4xl mb-6 sm:mb-12 lg:mb-12">
        Join a{" "}
        <span className="bg-gradient-text bg-clip-text text-transparent">
          Community
        </span>{" "}
        of Web3 & AI Devs across the Globe
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3 lg:gap-6">
        {/* About Hack The League */}
        <div className="flex flex-col gap-3 sm:gap-3 lg:justify-between col-span-1 border-[#2c2c2c] border p-3 sm:p-6 lg:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl">
          <div className="flex flex-col gap-2">
            <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
              <UserGroupIcon
                size={28}
                className="w-6 sm:w-6 lg:w-7 h-fit"
                color="#A962FF"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-violet-600 text-xl sm:text-xl lg:text-2xl font-semibold">
                About Hack The League
              </h3>
              <p className="text-white text-[10px] sm:text-xs lg:text-sm ">
                Hack The League is a vision that unifies creativity and
                technology, a community made for opportunists who want to build
                practical solutions for real-world problems. HTL is not just a
                hackathon but an impact layer for Web3 and AI technologies.
                After witnessing an incredible victory of creative projects and
                dynamic participants at HTL 1.0, 2.0, and 3.0, HTL is now
                seeking new horizons! This season, have an even bigger
                technically rich experience packed with powerful Web3 and AI
                partnerships and workshops at HTL 4!
              </p>
            </div>
          </div>
          <Image
            src={AboutImage}
            alt="Hack The League Team"
            className="rounded-md"
            layout="responsive"
            width={500}
            height={300}
            quality={75}
            placeholder="blur"
          />
        </div>
        {/* Stats Section */}
        <div className="grid lg:grid-cols-1 gap-3 sm:gap-3 lg:gap-6">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl border-[#2c2c2c] border ">
            <div>
              <Image
                src={DevImage}
                alt="Hack The League Team"
                className="rounded-xl sm:rounded-2xl lg:rounded-3xl"
                layout="responsive"
                width={500}
                height={300}
                quality={75}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl sm:rounded-2xl lg:rounded-3xl"></div>
            </div>

            <div className="absolute flex flex-col justify-between bottom-0 h-full p-3 sm:p-3 lg:p-6">
              <div className="bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                <CodeIcon
                  size={28}
                  className="w-6 sm:w-6 lg:w-7 h-fit"
                  color="#F3EC40"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-[#f3ec40]">
                  3,600+
                </h2>
                <h3 className="text-white text-xl sm:text-xl lg:text-2xl font-regular">
                  Developer Community
                </h3>
                <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                  A global network of developers advancing Web3 and AI
                  technologies through collaboration and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-3 lg:gap-6">
            <div className=" flex flex-col gap-6 border-[#2c2c2c] border p-3 sm:p-3 lg:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl">
              <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                <Folder03Icon
                  size={28}
                  className="w-6 sm:w-6 lg:w-7"
                  color="#19FB9B"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-[#19FB9B]">
                  300+
                </h2>
                <h3 className="text-white text-xl sm:text-xl lg:text-2xl font-regular">
                  Web3 & AI Projects
                </h3>
                <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                  Over 300 Web3 and AI projects built to solve real-world
                  challenges with cutting-edge technology.
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-6 border-[#2c2c2c] border p-3 sm:p-3 lg:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl">
              <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                <EarthIcon
                  size={28}
                  className="w-6 sm:w-6 lg:w-7 h-fit"
                  color="#2DB8EA"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-[#2DB8EA]">
                  5+
                </h2>
                <h3 className="text-white text-xl sm:text-xl lg:text-2xl font-regular">
                  Countries Impacted
                </h3>
                <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                  HTL has impacted developers across multiple countries using
                  Web3 and AI technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
