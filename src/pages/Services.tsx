import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="mt-24 flex min-h-screen justify-center text-4xl">
        <section className="flex min-h-screen w-11/12 flex-col px-4">
          <div>Services</div>
        </section>
      </main>
    </>
  );
}
