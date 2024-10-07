import React from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
    id, children
}) => {
    return (
        <section id={id} className=" mx-5 sm:mx-10 lg:mx-20 my-4 sm:my-16 lg:my-16">
            {children}
        </section>
    );
}

export default Section;