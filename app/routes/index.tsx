import Footer from "~/components/Footer";
import Nav from "~/components/Nav/Nav";
import Hero from "~/components/Home/HomeHero";
import LearnMore from "~/components/Home/LearnMore";
import WhatWeOffer from "~/components/Home/WhatWeOffer";
import WhyChooseUs from "~/components/Home/WhyChooseUs";
import GetStarted from "~/components/Home/GetStarted";
import WeirdAl from "~/components/Home/WeirdAl";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-cwsGreen">
      <main className="">
        <Hero />
        <LearnMore />
        <WeirdAl />
        <WhatWeOffer />
        <WhyChooseUs />
        <GetStarted />
      </main>
    </div>
  );
}
