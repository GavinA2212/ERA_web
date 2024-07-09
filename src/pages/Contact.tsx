import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="mt-24 flex min-h-screen justify-center text-4xl">
        <section className="flex min-h-screen w-11/12 flex-col px-4">
          <section className="rounded-lg bg-white p-8 shadow-md">
            <h1 className="mb-4 text-3xl font-semibold text-gray-800">Contact Us</h1>
            <p className="mb-6 text-lg text-gray-600">
              For any inquiries, please reach out to us via email.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700">
              Send Email
            </a>
          </section>
        </section>
      </main>
    </>
  );
}
