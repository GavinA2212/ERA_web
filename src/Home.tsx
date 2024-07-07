import HomeContainer from "./components/HomeContainer";

export default function Home() {
  return (
    <>
      <main className="mt-24 flex min-h-screen justify-center to-stone-500 text-4xl">
        <section className="flex h-full w-11/12 flex-col px-4">
          <div className="animate-fadeIn flex flex-col items-center justify-center">
            <h1 className="animate-fadeIn font-Merriweather pt-6 text-center text-black">
              Welcome to ER Automation
            </h1>
            <h2 className="font-Merriweather mt-3 text-center text-base text-black">
              Empowering Efficiency with Cutting-Edge Automation Solutions
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 grid-rows-4 gap-x-20 gap-y-20 md:grid-cols-2 md:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-1">
            <HomeContainer
              header="Engineering Services"
              description="ER Automation is a leading provider of robotics, controls, multi-craft, electrical, mechanical integration, and production support. We offer emergency, short-term, and long-term hourly contract support. Our highly skilled specialists enhance current running systems to maximize output and productivity. Customized hourly rates and free quotes are available."
              image="/assets/RoboticArm.jpg"
            ></HomeContainer>
            <HomeContainer
              header="Cycle Time Consulting"
              description="We observe your current running system on day one. Then with scheduled downtime, we implement our solutions on days two and three while providing in-depth analysis for reducing cycle time, eliminating bottlenecks, and reprocessing weld process points. Additionally, we offer solutions for implementing your periphery to ensure you have an optimized system that produces the maximum parts per hour when the system is brought back up, thus adding to your bottom line. Customized pricing or hourly rates are available."
              image="/assets/CycleTimeConsulting.jpg"
            ></HomeContainer>
            <HomeContainer
              header="Training Services"
              description="With over 50 years of combined automation experience between our two owners, we offer some of the best custom training packages in the world. Whether the training need is basic, intermediate, advanced, or niche-specific (laser, vision, welding, adhesive, or controls), we create and provide custom training manuals designed around your team members' needs. This ensures they come out of the classroom ready to make a difference in your systems."
              image="/assets/Training.jpg"
            ></HomeContainer>
            <HomeContainer
              header="Service/Preventative Maintenance/Repairs"
              description="We offer full service for your existing equipment, including grease/oil changes, motor replacements, dress pack and cable replacements, gearbox repairs, motherboard repairs, safety board repairs, and any other necessary repairs to restore your equipment to top shape. Call for specific maintenance needs; we most likely offer it. Emergency support and scheduled service options are available. Pricing is reduced for planned service work. Emergency work will be at ER rates, but we'll be on our way to get you back up and running."
              image="/assets/Maintnence.jpeg"
            ></HomeContainer>
          </div>
          <div className="mt-20"></div>
        </section>
      </main>
    </>
  );
}
