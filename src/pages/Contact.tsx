import LetsTalk from "/assets/LetsTalk.png";
import styles from "../styles/contactStyles.module.css";
import {
  useFadeInOnScrollDiv,
  useFadeInOnScrollList,
} from "../utils/FadeInOnScroll";
import { useScroll } from "../context/ScrollContext";
import { useEffect } from "react";

export default function Contact() {
  const {
    containerRef: contactContainerRef,
    isVisible: contactContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: accessContainerRef,
    isVisible: accessRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const { containerRef: list1ContainerRef, isVisible: list1RefIsVisible } =
    useFadeInOnScrollList(0.2);
  const { containerRef: list2ContainerRef, isVisible: list2RefIsVisible } =
    useFadeInOnScrollList(0.2);
  const { containerRef: list3ContainerRef, isVisible: list3RefIsVisible } =
    useFadeInOnScrollList(0.2);
  const { containerRef: list4ContainerRef, isVisible: list4RefIsVisible } =
    useFadeInOnScrollList(0.2);
  const { containerRef: readyContainerRef, isVisible: readyRefIsVisible } =
    useFadeInOnScrollDiv(0.2);
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
      <main className="mt-24 flex min-h-screen justify-center text-4xl">
        <section className="flex min-h-screen w-11/12 flex-col items-center px-4">
          <div className="w-96">
            <img src={LetsTalk} className="animate-containerFadeIn"></img>
          </div>
          <div className="animate-containerFadeIn">
            <div className={styles.dotflashing}></div>
          </div>
          <div className="flex w-full flex-col items-center md:flex-row md:items-start md:justify-center md:gap-8">
            <div
              ref={contactContainerRef}
              className={`flex flex-col items-center ${contactContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
            >
              <h1 className="font mt-16 text-center text-slate-800">
                Contact Us for Expert Automation Solutions
              </h1>
              <div className="max-w-lg">
                <h2 className="mt-5 text-left font-Merriweather text-sm">
                  Are you looking to streamline your processes and enhance
                  efficiency with cutting-edge automation solutions? Our
                  team of experienced professionals is here to assist you
                  every step of the way. Whether you have questions about
                  our services or need a custom quote tailored to your
                  specific needs, we are ready to provide the support you
                  require.
                </h2>
                <div
                  id="large-screen-contact"
                  className={`hidden flex-col items-center md:flex`}
                >
                  <h4 className="mt-24 max-w-xl text-center text-lg font-semibold text-slate-800">
                    Ready to take the next step? Click the link below to
                    email us and start the conversation. We look forward to
                    helping you achieve your automation goals.
                  </h4>
                  <a
                    href="mailto:info@erautomation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-fit rounded-full bg-red-600 text-center text-xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-red-300 active:bg-red-900"
                  >
                    <p className="px-10 py-3">Contact Us</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-fit flex-col items-center">
              <h3
                ref={accessContainerRef}
                className={`font mt-10 text-center text-xl font-semibold text-slate-800 md:mt-20 ${accessRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
              >
                By choosing our automation solutions, you gain access to:
              </h3>
              <ul className="mt-10 flex max-w-lg list-disc flex-col gap-5 pl-5 text-lg font-semibold text-slate-800">
                <li
                  ref={list1ContainerRef}
                  className={`${list1RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
                >
                  <span className="font-bold">Expert Consultation: </span>
                  Our knowledgeable team will help you identify the best
                  automation strategies for your business.
                </li>
                <li
                  ref={list2ContainerRef}
                  className={`${list2RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
                >
                  <span className="font-bold">Customized Solutions: </span>
                  We offer tailored automation solutions designed to meet
                  the
                </li>
                <li
                  ref={list3ContainerRef}
                  className={`${list3RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
                >
                  <span className="font-bold">Seamless Integration: </span>
                  Our solutions are crafted to integrate smoothly with your
                  existing systems, ensuring minimal disruption and maximum
                  efficiency.
                </li>

                <li
                  ref={list4ContainerRef}
                  className={`${list4RefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
                >
                  <span className="font-bold">Ongoing Support: </span> We
                  provide continuous support to ensure your automation
                  systems operate optimally.
                </li>
              </ul>
            </div>
          </div>
          <div
            ref={readyContainerRef}
            className={`flex flex-col items-center md:hidden ${readyRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
          >
            <h4 className="mt-10 max-w-xl text-center text-lg font-semibold text-slate-800">
              Ready to take the next step? Click the link below to email us
              and start the conversation. We look forward to helping you
              achieve your automation goals.
            </h4>
            <a
              href="mailto:info@erautomation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-fit rounded-full bg-red-600 text-center text-xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-red-300 active:bg-red-900"
            >
              <p className="px-10 py-3">Contact Us</p>
            </a>
          </div>
          <div className="mt-24"></div>
        </section>
      </main>
    </>
  );
}
