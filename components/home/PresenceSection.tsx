import Section from "../common/Section";
import { Agreement02Icon, EarthIcon, ChartIncreaseIcon, Camera01Icon } from "hugeicons-react";
import PartnerSlider from "../PartnerSlider";
import EventGlimpseSlider from "../EventGlimpseSlider";

export default function PresenceSection() {
    return (
        <Section id="presence">
            <h2 className="text-center text-white font-semibold mb-6 text-2xl sm:mb-12 sm:text-4xl lg:mb-12 lg:text-4xl">
                The Most <span className="bg-gradient-text bg-clip-text text-transparent">Global</span> Presence
            </h2>
            <div className="flex w-full flex-col gap-6 max-sm:gap-3">
                <div className="flex flex-col lg:flex-row gap-6 max-sm:gap-3 w-full">
                    {/* Collab Section */}
                    <div className="flex flex-col gap-6 rounded-xl border border-[#2c2c2c] p-3 sm:rounded-2xl sm:p-3 lg:rounded-3xl lg:p-6 w-full lg:w-2/3">
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <div className="rounded-full bg-white bg-opacity-10 p-2 w-fit sm:p-2 lg:p-3">
                                <Agreement02Icon size={28} className="h-fit w-6 sm:w-6 lg:w-7" color="#A962FF" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-violet-600 font-semibold text-2xl sm:text-3xl lg:text-3xl">Collaborated with Various Events</h2>
                                <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                                    We&apos;ve partnered with leading global events like DEVCON, WebX 2024, DAO Tokyo, and many more, driving innovation in decentralized technologies.
                                </p>
                            </div>
                        </div>
                        <PartnerSlider />
                    </div>
                    {/* Number Section */}
                    <div className="rounded-xl border border-[#2c2c2c] p-3 sm:rounded-2xl sm:p-3 lg:rounded-3xl lg:p-6 w-full lg:w-1/3">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <div className="rounded-full bg-white bg-opacity-10 p-2 w-fit sm:p-2 lg:p-3">
                                    <ChartIncreaseIcon size={28} className="h-fit w-6 sm:w-6 lg:w-7" color="#19FB9B" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-[#19FB9B] font-semibold text-2xl sm:text-3xl lg:text-3xl">Increase in Numbers</h2>
                                    <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                                        These numbers reflect our expanding influence, global reach, and the trust we&apos;ve built within the community and industry.
                                    </p>
                                </div>
                            </div>
                            <div className="h-[0.5px] w-full border border-[#2c2c2c]" />
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-[#19FB9B] font-semibold text-2xl">20k +</h2>
                                    <p className="text-xs text-white">Social Media Reach</p>
                                </div>
                                <div>
                                    <h2 className="text-[#19FB9B] font-semibold text-2xl">500 +</h2>
                                    <p className="text-xs text-white">Followers</p>
                                </div>
                                <div>
                                    <h2 className="text-[#19FB9B] font-semibold text-2xl">20 +</h2>
                                    <p className="text-xs text-white">Trusted partners & sponsors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 max-sm:gap-3 w-full">
                    {/* Global Section */}
                    <div className="rounded-xl flex flex-col gap-2 md:gap-4 border border-[#2c2c2c] p-3 sm:rounded-2xl sm:p-3 lg:rounded-3xl lg:p-6 w-full lg:w-1/3">
                        <div className="rounded-full bg-white bg-opacity-10 p-2 w-fit sm:p-2 lg:p-3">
                            <EarthIcon size={28} className="h-fit w-6 sm:w-6 lg:w-7" color="#2DB8EA" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#2DB8EA] font-semibold text-2xl sm:text-3xl lg:text-3xl">Expanding Global Footprint</h2>
                            <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                                With a presence in 5+ countries, we’re driving innovation in decentralized technologies and shaping the future of the digital world.
                            </p>
                        </div>
                    </div>
                    {/* Glimpse Section */}
                    <div className="rounded-xl border border-[#2c2c2c] p-3 sm:rounded-2xl sm:p-3 lg:rounded-3xl lg:p-6 gap-6 w-full lg:w-2/3">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className="rounded-full bg-white bg-opacity-10 p-2 w-fit sm:p-2 lg:p-3">
                                <Camera01Icon size={28} className="h-fit w-6 sm:w-6 lg:w-7" color="#f3ec40" />
                            </div>
                            <h2 className="text-[#f3ec40] font-semibold text-2xl sm:text-3xl lg:text-3xl">Glimpse from the Events</h2>
                        </div>
                        <EventGlimpseSlider />
                    </div>
                </div>
            </div>
        </Section>
    );
}
