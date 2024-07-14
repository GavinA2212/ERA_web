import React from "react";
import { useFadeInOnScrollDiv } from "../utils/FadeInOnScroll";

interface HomeContainerProps {
  header: string;
  description: string;
}

const ServicesSection: React.FC<HomeContainerProps> = ({
  header,
  description,
}) => {
  const { containerRef, isVisible } = useFadeInOnScrollDiv(0.2);
  return (
    <>
      <div
        ref={containerRef}
        className={`mt-4 flex flex-col ${isVisible ? "visible animate-containerFadeIn" : "invisible"}`}
      >
        <h2 className="text-2xl font-medium text-slate-800">{header}</h2>
        <p className="mt-4 text-left font-Merriweather text-sm">
          {description}
        </p>
      </div>
    </>
  );
};
export default ServicesSection;
