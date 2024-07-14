/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect, useRef } from "react";
import ServicesSection from "../components/ServicesSection";
import { useScroll } from "../context/ScrollContext";
import { useFadeInOnScrollDiv } from "../utils/FadeInOnScroll";

export default function Services() {
  const service2HeaderRef = useRef<HTMLElement | null>(null);
  const service3HeaderRef = useRef<HTMLElement | null>(null);
  const service4HeaderRef = useRef<HTMLElement | null>(null);
  const { scrollTo, setScrollTo } = useScroll();

  useEffect(() => {
    console.log(scrollTo);
    const scrollOptions: ScrollToOptions = { behavior: "smooth" };
    let adjustScroll = -90; // Adjust this value to control how much less you want to scroll
    if (window.innerWidth <= 768) {
      // Adjust the adjustScroll value for md screens and larger
      adjustScroll = 0; // Example value, adjust as needed
    }

    const scrollToElement = (
      elementRef: MutableRefObject<HTMLElement | null>,
    ) => {
      if (elementRef.current) {
        const elementRect = elementRef.current.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const adjustedTop = absoluteElementTop + adjustScroll; // Adjust scroll position

        if ("scrollBehavior" in document.documentElement.style) {
          // If the browser supports smooth scrolling
          window.scrollTo({
            top: adjustedTop,
            behavior: scrollOptions.behavior,
          });
        } else {
          // Fallback for browsers that do not support smooth scrolling
          window.scrollTo(0, adjustedTop);
        }
      }
    };

    switch (scrollTo) {
      case "service1":
        window.scrollTo({ top: 0, behavior: scrollOptions.behavior });
        break;
      case "service2":
        scrollToElement(service2HeaderRef);
        break;
      case "service3":
        scrollToElement(service3HeaderRef);
        break;
      case "service4":
        scrollToElement(service4HeaderRef);
        break;
      default:
        window.scrollTo(0, 0);
    }
    setScrollTo("");
  }, []);
  //images
  const {
    containerRef: image1ContainerRef,
    isVisible: image1ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: image2ContainerRef,
    isVisible: image2ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: image3ContainerRef,
    isVisible: image3ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: image4ContainerRef,
    isVisible: image4ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  //contact
  const {
    containerRef: contact1ContainerRef,
    isVisible: contact1ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: contact2ContainerRef,
    isVisible: contact2ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: contact3ContainerRef,
    isVisible: contact3ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);
  const {
    containerRef: contact4ContainerRef,
    isVisible: contact4ContainerRefIsVisible,
  } = useFadeInOnScrollDiv(0.2);

  return (
    <>
      <main className="mt-24 flex min-h-screen flex-col items-center text-4xl">
        <section
          id="service-1-header"
          className="flex h-28 w-full items-center justify-center bg-red-600"
        >
          <h1 className="text-center font-Merriweather text-4xl font-medium text-white md:text-5xl">
            Engineering Contract Services
          </h1>
        </section>
        <section
          id="service-1"
          className="mt-12 flex h-fit w-11/12 flex-col items-center gap-12 md:mt-24 md:flex-row md:items-start md:justify-center md:gap-16"
        >
          <div id="text-content" className="max-w-636 h-fit flex-1">
            <h1 className="mb-10 font-semibold text-slate-800">
              Our Engineering Services{" "}
            </h1>
            <ServicesSection
              header="Comprehensive Automation Solutions"
              description="At ERAutomation, we pride ourselves on being a leading provider of a wide range of automation services, including robotics, controls, multi-craft, electrical, mechanical, integration, and production support. Our extensive expertise and innovative approach ensure that we deliver top-notch solutions tailored to meet the unique needs of each client. Whether you are looking to implement new systems or enhance existing ones, our team is dedicated to helping you achieve optimal efficiency and productivity."
            />
            <ServicesSection
              header="Flexible Contract Support"
              description="We understand that different businesses have varying needs when it comes to automation support. That's why we offer flexible contract options, including emergency, short-term, and long-term hourly support. Our highly skilled specialists are ready to assist you with any immediate issues or ongoing projects, ensuring your operations run smoothly and effectively. With ERAutomation, you can count on reliable and responsive service whenever you need it."
            />
            <ServicesSection
              header="Maximizing Output and Productivity"
              description="Our team of experts excels in enhancing current running systems to maximize output and productivity. By leveraging the latest technologies and industry best practices, we identify areas for improvement and implement solutions that drive significant performance gains. Our goal is to help your business achieve greater efficiency and profitability through superior automation solutions."
            />
            <ServicesSection
              header="Customized Solutions and Free Quotes"
              description="At ERAutomation, we believe in providing customized solutions that fit your specific requirements and budget. We offer competitive hourly rates tailored to your project's scope and complexity. To help you make informed decisions, we provide free quotes, giving you a clear understanding of the costs involved before you commit. Our commitment to transparency and customer satisfaction ensures you receive the best value for your investment."
            />
            <p
              ref={contact1ContainerRef}
              className={`mt-6 text-left font-Merriweather text-xs ${contact1ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
            >
              Discover how ERAutomation can transform your business
              operations with our comprehensive automation services.
              Contact us today for a free quote and take the first step
              towards maximizing your productivity and efficiency.
            </p>
            <a
              href="mailto:info@erautomation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-sm text-blue-600 underline hover:text-blue-800"
            >
              info@erautomation.com
            </a>
          </div>
          <div
            ref={image1ContainerRef}
            className={`max-w-636 flex-1 ${image1ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
          >
            <img src="/assets/RoboticArm.jpg"></img>
          </div>
        </section>
        <section
          ref={service2HeaderRef}
          id="service-2-header"
          className="mt-28 flex h-28 w-full items-center justify-center bg-red-600"
        >
          <h1 className="text-center font-Merriweather text-4xl font-medium text-white md:text-5xl">
            Cycle Time Consulting Services
          </h1>
        </section>
        <section
          id="service-2"
          className="mt-12 flex h-fit w-11/12 flex-col items-center gap-12 md:mt-24 md:flex-row md:items-start md:justify-center md:gap-16"
        >
          <div
            id="text-content"
            className="max-w-636 h-fit flex-1 md:order-2"
          >
            <h1 className="mb-10 font-semibold text-slate-800">
              Our Implemenation Process:{" "}
            </h1>
            <ServicesSection
              header="Day One: Observation and Assessment"
              description="At ERAutomation, our process begins with a thorough observation of your current running system on the first day. Our team of experts conducts a detailed assessment to understand your existing operations, identify potential areas for improvement, and gather essential data. This step is crucial in creating a tailored plan that addresses your specific needs and challenges."
            />
            <ServicesSection
              header="Days Two and Three: Implementation and Analysis"
              description="With scheduled downtime on days two and three, we move forward with the implementation of our customized solutions. Our specialists work diligently to integrate these enhancements seamlessly into your system. During this phase, we provide an in-depth analysis aimed at reducing cycle time, eliminating bottlenecks, and reprocessing weld process points. Our goal is to ensure that every aspect of your system operates at peak efficiency."
            />
            <ServicesSection
              header="Optimizing Peripheral Systems"
              description="In addition to refining the core processes, we also focus on implementing solutions for your peripheral systems. This comprehensive approach guarantees that all components work harmoniously, resulting in an optimized system. When the system is brought back online, it is primed to produce the maximum parts per hour, thereby significantly contributing to your bottom line."
            />
            <ServicesSection
              header="Customized Pricing and Hourly Rates"
              description="Our team of experts excels in enhancing current running systems to maximize output and productivity. By leveraging the latest technologies and industry best practices, we identify areas for improvement and implement solutions that drive significant performance gains. Our goal is to help your business achieve greater efficiency and profitability through superior automation solutions."
            />
            <p
              ref={contact2ContainerRef}
              className={`mt-6 text-left font-Merriweather text-xs ${contact2ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
            >
              Discover how ERAutomation can transform your business
              operations with our comprehensive automation services.
              Contact us today for a free quote and take the first step
              towards maximizing your productivity and efficiency.
            </p>
            <a
              href="mailto:info@erautomation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-sm text-blue-600 underline hover:text-blue-800"
            >
              info@erautomation.com
            </a>
          </div>
          <div
            ref={image2ContainerRef}
            className={`max-w-636 flex-1 md:order-1 ${image2ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
          >
            <img src="/assets/CycleTimeConsulting.jpg"></img>
          </div>
        </section>
        <section
          ref={service3HeaderRef}
          id="service-3-header"
          className="mt-28 flex h-28 w-full items-center justify-center bg-red-600"
        >
          <h1 className="text-center font-Merriweather text-4xl font-medium text-white md:text-5xl">
            Training Services
          </h1>
        </section>
        <section
          id="service-3"
          className="mt-12 flex h-fit w-11/12 flex-col items-center gap-12 md:mt-24 md:flex-row md:items-start md:justify-center md:gap-16"
        >
          <div id="text-content" className="max-w-636 h-fit flex-1">
            <h1 className="mb-10 font-semibold text-slate-800">
              Custom Training Packages{" "}
            </h1>
            <ServicesSection
              header="Unmatched Expertise"
              description="With over 50 years of combined automation experience between our two owners, ERAutomation is uniquely positioned to offer some of the best custom training packages in the world. Our extensive knowledge and hands-on experience in the industry allow us to design training programs that are both comprehensive and practical, ensuring your team receives the highest quality education."
            />
            <ServicesSection
              header="Tailored Training Programs"
              description="To support our training programs, we create and provide custom training manuals that are tailored to your team's requirements. These manuals are crafted to reinforce the training sessions and serve as valuable reference materials. By addressing the unique aspects of your systems and processes, our manuals ensure that your team can apply their new skills effectively and confidently."
            />
            <ServicesSection
              header="Custom Training Manuals"
              description="Our team of experts excels in enhancing current running systems to maximize output and productivity. By leveraging the latest technologies and industry best practices, we identify areas for improvement and implement solutions that drive significant performance gains. Our goal is to help your business achieve greater efficiency and profitability through superior automation solutions."
            />
            <ServicesSection
              header="Ready to Make a Difference"
              description="Our goal is to ensure that your team members come out of the classroom ready to make a significant impact on your systems. By focusing on practical, real-world applications and hands-on training, we prepare your employees to handle the challenges of your specific automation environment. This readiness translates into improved system performance and operational efficiency."
            />
            <p
              ref={contact3ContainerRef}
              className={`mt-6 text-left font-Merriweather text-xs ${contact3ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
            >
              Invest in the future of your business with ERAutomation's
              custom training packages. Contact us today to learn more
              about how our tailored training solutions can empower your
              team and drive your success.
            </p>
            <a
              href="mailto:info@erautomation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-sm text-blue-600 underline hover:text-blue-800"
            >
              info@erautomation.com
            </a>
          </div>
          <div
            ref={image3ContainerRef}
            className={`max-w-636 flex-1 ${image3ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
          >
            <img src="/assets/Training.jpg"></img>
          </div>
        </section>
        <section
          ref={service4HeaderRef}
          id="service-4-header"
          className="mt-28 flex h-28 w-full items-center justify-center bg-red-600"
        >
          <h1 className="text-center font-Merriweather text-4xl font-medium text-white md:text-5xl">
            Service/Preventative Maintenance/Repairs
          </h1>
        </section>
        <section
          id="service-4"
          className="mt-12 flex h-fit w-11/12 flex-col items-center gap-12 md:mt-24 md:flex-row md:items-start md:justify-center md:gap-16"
        >
          <div
            id="text-content"
            className="max-w-636 h-fit flex-1 md:order-2"
          >
            <h1 className="mb-10 font-semibold text-slate-800">
              Comprehensive Equipment Maintenance{" "}
            </h1>
            <ServicesSection
              header="Full-Service Maintenance"
              description="ERAutomation provides full-service maintenance for your existing equipment, ensuring it operates at peak performance. Our services include grease and oil changes, motor replacements, dress pack and cable replacements, gearbox repairs, motherboard repairs, safety board repairs, and any other necessary repairs. Our skilled technicians are equipped to handle a wide range of maintenance tasks to restore your equipment to top shape."
            />
            <ServicesSection
              header="Tailored Maintenance Solutions"
              description="Understanding that each piece of equipment and each business has unique maintenance needs, we offer tailored solutions to meet those specific requirements. Whether you need routine maintenance or specialized repairs, ERAutomation has the expertise to deliver. Call us with your specific maintenance needs, and we will most likely offer the services you require to keep your equipment running smoothly."
            />
            <ServicesSection
              header="Emergency and Scheduled Support"
              description="ERAutomation offers both emergency support and scheduled service options to ensure your equipment receives the attention it needs, when it needs it. Our emergency support services are designed to get you back up and running as quickly as possible. While emergency work is billed at ER rates, our team will be on their way promptly to minimize downtime and restore your operations."
            />
            <ServicesSection
              header="Cost-Effective Planned Services"
              description="To help you manage maintenance costs, we offer reduced pricing for planned service work. Scheduling regular maintenance not only helps prevent unexpected breakdowns but also ensures your equipment remains in optimal condition. By planning your service needs in advance, you can benefit from lower costs and improved equipment reliability."
            />
            <p
              ref={contact4ContainerRef}
              className={`mt-6 text-left font-Merriweather text-xs ${contact4ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
            >
              Ensure the longevity and efficiency of your equipment with
              ERAutomation's comprehensive maintenance services. Contact us
              today for specific maintenance needs or to schedule a
              service, and experience the peace of mind that comes with
              knowing your equipment is in expert hands.
            </p>
            <a
              href="mailto:info@erautomation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-sm text-blue-600 underline hover:text-blue-800"
            >
              info@erautomation.com
            </a>
          </div>
          <div
            ref={image4ContainerRef}
            className={`max-w-636 flex-1 md:order-1 ${image4ContainerRefIsVisible ? "visible animate-containerFadeIn" : "invisible"}`}
          >
            <img src="/assets/Maintnence.jpeg"></img>
          </div>
        </section>

        <div className="h-40 w-full"></div>
      </main>
    </>
  );
}
