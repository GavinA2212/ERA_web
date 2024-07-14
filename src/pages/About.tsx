import { useEffect } from "react";
import { useScroll } from "../context/ScrollContext";
import { useFadeInOnScrollDiv } from "../utils/FadeInOnScroll";
import Logo from "/assets/Logo.png";
import { Link } from "react-router-dom";

export default function About() {
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
  const { scrollTo, setScrollTo } = useScroll();

  useEffect(() => {
    if (scrollTo == "") {
      setScrollTo("");
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <main className="mt-28 flex min-h-screen justify-center font-Merriweather text-4xl">
        <section className="flex min-h-screen w-11/12 flex-col items-center px-4">
          <Link
            to="/"
            className="max-w-400 mt-4 flex animate-fadeIn items-center justify-center md:max-w-500"
          >
            <img src={Logo} alt="ER Automation Logo"></img>
          </Link>
          <h2 className="mt-3 text-center font-Merriweather text-base text-black md:mt-5">
            Empowering Efficiency with Cutting-Edge Automation Solutions
          </h2>

          <div className="flex w-10/12 flex-col items-center">
            <section className="flex h-fit w-full flex-col items-center md:items-end">
              <div
                ref={section1ContainerRef}
                className={`max-w-2xl flex-col items-center ${section1RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
              >
                <h1 className="mt-12 whitespace-nowrap text-left text-slate-800">
                  Company Overview
                </h1>
                <h2 className="mt-5 text-left font-Merriweather text-sm">
                  ERAutomation is dedicated to revolutionizing the
                  automation industry by providing innovative, efficient,
                  and reliable automation solutions. Our goal is to empower
                  businesses to enhance productivity, reduce operational
                  costs, and achieve sustainable growth. We strive to
                  transform how industries operate by integrating
                  cutting-edge technology and customized automation
                  strategies that cater to the unique needs of each client.
                  By focusing on continuous improvement and excellence in
                  every project, ERAutomation aims to be a driving force in
                  the future of automation, helping businesses to stay
                  competitive and thrive in a rapidly evolving marketplace.
                </h2>
              </div>
            </section>
            <section className="flex h-fit w-full flex-col items-center md:items-start">
              <div
                ref={section2ContainerRef}
                className={`max-w-2xl flex-col items-center ${section2RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
              >
                <h1 className="mt-16 text-center text-slate-800">
                  Our Mission
                </h1>
                <h2 className="mt-5 text-left font-Merriweather text-sm">
                  Our goal is to establish ERAutomation as a global leader
                  in automation technology, propelling the future of
                  Industry 4.0. We are committed to offering cutting-edge
                  solutions that not only transform the way businesses
                  operate but also enhance their ability to compete in the
                  digital age. By harnessing the latest advancements in
                  automation, we aim to drive innovation, improve
                  efficiency, and enable our clients to achieve
                  unparalleled success in their respective industries.
                  Through our visionary approach and dedication to
                  excellence, we aspire to shape the future of automation
                  and redefine the standards of industry performance and
                  competitiveness.
                </h2>
              </div>
            </section>
            <section className="flex h-fit w-full flex-col items-center md:items-end">
              <div
                ref={section3ContainerRef}
                className={`max-w-2xl flex-col items-center ${section3RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
              >
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
                    <span className="font-bold">
                      Customer-Centricity:{" "}
                    </span>
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
              </div>
            </section>
            <div
              ref={brandsContainerRef}
              className={`flex flex-col ${brandsRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
            >
              <h1 className="mt-28 text-center text-slate-800">
                Brands we've worked with:
              </h1>
            </div>
            <div className="h-80 max-w-2xl"></div>
          </div>
        </section>
      </main>
    </>
  );
}
