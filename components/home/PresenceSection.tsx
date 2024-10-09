import Section from "../common/Section";
import { Agreement02Icon, EarthIcon, ChartIncreaseIcon, Camera01Icon } from "hugeicons-react";
import PartnerSlider from "../PartnerSlider";
import EventGlimpseSlider from "../EventGlimpseSlider";

export default function PresenceSection() {
    return (
        <Section id="presence">
            <h2 className="text-white text-center font-semibold text-2xl sm:text-4xl lg:text-4xl mb-6 sm:mb-12 lg:mb-12">
                The Most <span className="bg-gradient-text bg-clip-text text-transparent">Global</span> Presence
            </h2>
            <div className="flex flex-col w-full max-sm:gap-3 gap-6">
                <div className="flex max-sm:flex-col max-sm:gap-3 gap-6">
                    <div className="max-sm:w-full w-2/3 flex flex-col max-sm:gap-3 gap-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border-[#2c2c2c] border p-3 sm:p-3 lg:p-6">
                        <div>
                            <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                                <Agreement02Icon size={28} className="w-6 sm:w-6 lg:w-7 h-fit" color="#A962FF" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-violet-600" >Collaborated with Various Events</h2>
                                <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                                    We’ve partnered with leading global events like DEVCON, WebX 2024, DAO Tokyo, and many more, driving innovation in decentralized technologies.
                                </p>
                            </div>
                        </div>
                        <PartnerSlider />
                    </div>
                    <div className="max-sm:w-full w-1/3 rounded-xl sm:rounded-2xl lg:rounded-3xl border-[#2c2c2c] border p-3 sm:p-3 lg:p-6">
                        <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                            <ChartIncreaseIcon size={28} className="w-6 sm:w-6 lg:w-7 h-fit" color="#19FB9B" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#19FB9B]" >Increase in Numbers</h2>
                            <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                                These numbers reflect our expanding influence, global reach, and the trust we've built within the community and industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex max-sm:flex-col max-sm:gap-3 gap-6">
                    <div className="max-sm:w-full w-1/3 rounded-xl sm:rounded-2xl lg:rounded-3xl border-[#2c2c2c] border p-3 sm:p-3 lg:p-6">
                        <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                            <EarthIcon size={28} className="w-6 sm:w-6 lg:w-7 h-fit" color="#2DB8EA" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#2DB8EA]" >Expanding Global Footprint</h2>
                            <p className="text-white text-[10px] sm:text-xs lg:text-xs">
                                With a presence in 5+ countries, we’re driving innovation in decentralized technologies and shaping the future of the digital world.
                            </p>
                        </div>
                    </div>
                    <div className="max-sm:w-full w-2/3 rounded-xl sm:rounded-2xl lg:rounded-3xl border-[#2c2c2c] border p-3 sm:p-3 lg:p-6 max-sm:gap-3 gap-6">
                        <div>
                            <div className=" bg-white bg-opacity-10 rounded-full p-2 sm:p-2 lg:p-3 w-fit">
                                <Camera01Icon size={28} className="w-6 sm:w-6 lg:w-7 h-fit" color="#f3ec40" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#f3ec40]" >Collaborated with Various Events
                            </h2>
                        </div>
                        <EventGlimpseSlider />
                    </div>
                </div>
            </div>
        </Section>
    )
}