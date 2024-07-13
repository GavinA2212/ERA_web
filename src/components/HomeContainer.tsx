import React from "react";
import { useFadeInOnScrollDiv } from "../utils/FadeInOnScroll";

interface HomeContainerProps {
  header: string;
  description: string;
  image: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  header,
  description,
  image,
}) => {
  const { containerRef, isVisible } = useFadeInOnScrollDiv(0.2);

  const renderDescriptionWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <div ref={containerRef}>
        <div
          id="container"
          className={`flex-col rounded-md bg-grayT70 ${isVisible ? "visible animate-containerFadeIn" : "invisible"}`}>
          <img src={image} className="rounded-md"></img>
          <h3 className="mt-2 text-3xl font-semibold text-slate-800">
            {header}
          </h3>
          <p className="mt-4 text-left font-Merriweather text-sm">
            {renderDescriptionWithLineBreaks(description)}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
