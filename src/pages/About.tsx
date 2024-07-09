import { useEffect } from "react";
import useFadeInOnScroll from "../utils/FadeInOnScroll";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { containerRef, isVisible } = useFadeInOnScroll(0.2);
  return (
    <>
      <main className="mt-24 flex min-h-screen justify-center text-4xl">
        <section className="flex min-h-screen w-11/12 flex-col px-4">
          <div
            className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            About
          </div>
          <div
            ref={containerRef}
            className={`mt-96 size-96 bg-red-500 transition-opacity duration-500 ${isVisible ? "animate-containerFadeIn opacity-100" : "opacity-0"}`}></div>
        </section>
      </main>
    </>
  );
}
