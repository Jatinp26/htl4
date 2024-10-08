import Section from "../common/Section";
import LegacyCards from "../LegacyCards";

export default function LegacySection() {

    return (
        <Section id="legacy">
            <h2 className="text-white text-center font-semibold text-2xl sm:text-4xl lg:text-4xl mb-6 sm:mb-12 lg:mb-12">
                The of <span className="bg-gradient-text bg-clip-text text-transparent">Legacy</span> Hack The League
            </h2>
            <LegacyCards />
        </Section>
    );
}
