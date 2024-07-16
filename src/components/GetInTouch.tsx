import { useFadeInOnScrollDiv } from "../utils/FadeInOnScroll";

export default function GetInTouch() {
  const { containerRef, isVisible } = useFadeInOnScrollDiv(0.2);

  return (
    <>
      <div
        ref={containerRef}
        className={`flex max-w-xl flex-col justify-center self-center ${isVisible ? "visible animate-containerFadeIn" : "invisible"}`}
      >
        <h3 className="mt-16 text-center text-3xl font-semibold text-slate-800">
          Get in touch.
        </h3>
        <h4 className="mt-5 text-center font-Merriweather text-sm">
          Have questions about our automation solutions or need a custom
          quote? Our team of experts is here to help you streamline your
          processes and enhance efficiency. Click the link below to email
          us and start the conversation.
        </h4>
        <a
          href="mailto:info@erautomationinc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center text-3xl text-blue-600 underline hover:text-blue-800"
        >
          info@erautomationinc.com
        </a>
      </div>
    </>
  );
}
