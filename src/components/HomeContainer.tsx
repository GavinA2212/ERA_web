import React, { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const renderDescriptionWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: Disconnect observer after the element is visible
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);
  return (
    <>
      <div ref={containerRef}>
        <div
          id="container"
          className={`bg-grayT70 flex-col rounded-md ${isVisible ? "animate-containerFadeIn visible" : "invisible"}`}
        >
          <img src={image} className="rounded-md"></img>
          <h3 className="mt-2 text-3xl font-semibold text-slate-800">
            {header}
          </h3>
          <p className="font-Merriweather mt-4 text-left text-sm">
            {renderDescriptionWithLineBreaks(description)}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
