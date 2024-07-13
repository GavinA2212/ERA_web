import { useEffect } from "react";
import { useFadeInOnScrollDiv } from "../utils/FadeInOnScroll";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    containerRef: section1ContainerRef,
    isVisible: section1RefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: section2ContainerRef,
    isVisible: section2RefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: section3ContainerRef,
    isVisible: section3RefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: brandsContainerRef,
    isVisible: brandsRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  return (
    <>
      <main className="mt-24 flex min-h-screen justify-center font-Merriweather text-4xl">
        <section className="flex min-h-screen w-11/12 flex-col items-center px-4">
          <div className="flex flex-col items-center">
            <div
              ref={section1ContainerRef}
              className={`max-w-2xl flex-col items-center ${section1RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}>
              <h1 className="mt-16 whitespace-nowrap text-center text-slate-800">
                Company Overview
              </h1>
              <h2 className="mt-5 text-center font-Merriweather text-sm">
                ERAutomation is dedicated to revolutionizing the automation
                industry by providing innovative, efficient, and reliable
                automation solutions that empower businesses to enhance
                productivity, reduce operational costs, and achieve
                sustainable growth.
              </h2>
            </div>
            <div
              ref={section2ContainerRef}
              className={`max-w-2xl flex-col items-center ${section2RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}>
              <h1 className="mt-16 text-center text-slate-800">
                Our Mission
              </h1>
              <h2 className="mt-5 text-center font-Merriweather text-sm">
                Our goal is to be a global leader in automation technology,
                driving the future of industry 4.0 by offering cutting-edge
                solutions that transform the way businesses operate and
                compete in the digital age.
              </h2>
            </div>
            <div
              ref={section3ContainerRef}
              className={`max-w-2xl flex-col items-center ${section3RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}>
              <h1 className="mt-16 text-center text-slate-800">
                Our Values
              </h1>
              <ul className="mt-10 flex max-w-2xl list-disc flex-col gap-5 pl-5 text-base">
                <li>
                  <span className="font-bold">Innovation: </span>
                  Continuously pushing the boundaries of technology to
                  develop state-of-the-art automation solutions.
                </li>
                <li>
                  <span className="font-bold">Customer-Centricity: </span>
                  Prioritizing customer needs and delivering tailor-made
                  solutions that exceed expectations.
                </li>
                <li>
                  <span className="font-bold">Integrity:</span>
                  Upholding the highest standards of honesty and
                  transparency in all business dealings.
                </li>
                <li>
                  <span className="font-bold">Excellence: </span>
                  Striving for excellence in every project, ensuring the
                  highest quality and performance.
                </li>
                <li>
                  <span className="font-bold">Sustainability: </span>
                  Committing to environmentally responsible practices and
                  promoting sustainable development.
                </li>
              </ul>
              <div
                ref={brandsContainerRef}
                className={`flex flex-col ${brandsRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}>
                <h1 className="mt-28 text-center text-slate-800">
                  Brands we've worked with:
                </h1>
              </div>
              <div className="h-80 max-w-2xl"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
