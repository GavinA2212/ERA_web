import { useEffect } from "react";
import LetsTalk from "/assets/LetsTalk.png";
import styles from "../styles/contactStyles.module.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
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

          <div className="flex flex-col items-center">
            <h1 className="font mt-16 text-center text-slate-800">
              Contact Us for Expert Automation Solutions
            </h1>
            <div className="max-w-lg">
              <h2 className="mt-5 text-center font-Merriweather text-sm">
                Are you looking to streamline your processes and enhance
                efficiency with cutting-edge automation solutions? Our team
                of experienced professionals is here to assist you every
                step of the way. Whether you have questions about our
                services or need a custom quote tailored to your specific
                needs, we are ready to provide the support you require.
              </h2>
            </div>
          </div>
          <h3 className="font mt-10 text-center text-xl font-semibold text-slate-800">
            By choosing our automation solutions, you gain access to:
          </h3>
          <ul className="mt-10 flex max-w-lg list-disc flex-col gap-5 pl-5 text-lg font-semibold text-slate-800">
            <li>
              <span className="font-bold">Expert Consultation: </span>
              Our knowledgeable team will help you identify the best
              automation strategies for your business.
            </li>
            <li>
              <span className="font-bold">Customized Solutions: </span>
              We offer tailored automation solutions designed to meet the
              unique needs of your operations.
            </li>
            <li>
              <span className="font-bold">Seamless Integration: </span>
              Our solutions are crafted to integrate smoothly with your
              existing systems, ensuring minimal disruption and maximum
              efficiency.
            </li>
            <li>
              <span className="font-bold">Ongoing Support: </span> We
              provide continuous support to ensure your automation systems
              operate optimally.
            </li>
          </ul>
          <h4 className="mt-10 max-w-xl text-center text-lg font-semibold text-slate-800">
            Ready to take the next step? Click the link below to email us
            and start the conversation. We look forward to helping you
            achieve your automation goals.
          </h4>
          <a
            href="mailto:info@erautomation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-auto rounded-full bg-red-600 px-10 py-3 text-center text-xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-red-300 active:bg-red-900">
            Contact Us
          </a>
          <div className="mt-24"></div>
        </section>
      </main>
    </>
  );
}
