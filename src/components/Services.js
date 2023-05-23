import React, { useEffect, useState } from "react";
import plus from "../assets/images/crossline.png";

const Services = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const innovationsSection = document.getElementById("innovations");
      const plateformsSection = document.getElementById("plateforms");
      const strategySection = document.getElementById("strategy");
      const guidanceSection = document.getElementById("guidance");

      if (
        scrollPosition >= innovationsSection.offsetTop &&
        scrollPosition < plateformsSection.offsetTop
      ) {
        setActiveMenuItem("innovations");
      } else if (
        scrollPosition >= plateformsSection.offsetTop &&
        scrollPosition < strategySection.offsetTop
      ) {
        setActiveMenuItem("plateforms");
      } else if (
        scrollPosition >= strategySection.offsetTop &&
        scrollPosition < guidanceSection.offsetTop
      ) {
        setActiveMenuItem("strategy");
      } else if (scrollPosition >= guidanceSection.offsetTop) {
        setActiveMenuItem("guidance");
      } else {
        setActiveMenuItem("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="services">
      <div className="text-light-white px-6 md:px-12 lg:px-16 py-12 md:py-24 homepage-container mx-auto">
        <div className="flex items-start gap-x-8">
          <div className="hidden md:block" data-aos="fade-right">
            <img src={plus} alt="plus-icon" width="100px" />
          </div>
          {/* main div */}
          <div className="flex flex-col md:flex-row gap-y-12 justify-between items-start gap-x-8 md:gap-x-12 lg:gap-x-24">
            <div
              className="flex flex-col gap-y-4 uppercase text-[20px] lg:text-[30px] menu-fixed"
              data-aos="fade-right"
            >
              <a
                href="#innovations"
                className={`sidebar-heading ${
                  activeMenuItem === "innovations" ? "active" : ""
                }`}
              >
                innovations
              </a>
              <a
                href="#plateforms"
                className={`sidebar-heading ${
                  activeMenuItem === "plateforms" ? "active" : ""
                }`}
              >
                plateforms
              </a>
              <a
                href="#stretgy"
                className={`sidebar-heading ${
                  activeMenuItem === "strategy" ? "active" : ""
                }`}
              >
                strategy
              </a>
              <a
                href="#guidance"
                className={`sidebar-heading ${
                  activeMenuItem === "guidance" ? "active" : ""
                }`}
              >
                guidance
              </a>
            </div>
            <div className="h-[400px] overflow-auto lg:pr-12 xl:pr-32">
              <div id="innovations">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6 ">
                  Unleashing the power of curiosity
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  We've become a potent narrative platform that puts the
                  consumer at the heart of our storytelling. We harness the full
                  strength of our collective creativity, including both client
                  and agency, to discern what resonates with the consumers
                  rather than relying on speculation or personal bias. The
                  outcome? Impactful, effective creatives that are driven by
                  consumer insights.
                </p>
              </div>
              <div id="plateforms" className="mt-[80px] lg:mt-[150px]">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  Actual business results
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  Our priority is real-world business results, not just
                  theoretical reach. Our unwavering commitment is to bolster
                  brands by achieving tangible outcomes. We accomplish this
                  through an intensive understanding of, and respect for, the
                  platforms where consumers invest their time. We've developed
                  contemporary strategies for planning, purchasing, and
                  analytics designed to prompt consumer action.
                </p>
                <p className="mt-6 ont-light text-xs lg:text-base text-light-white">
                  Our focus is on understanding and maximizing consumer
                  attention, ensuring content relevance, and delivering
                  demonstrable results.
                </p>
              </div>
              <div id="stretgy" className="mt-[80px] lg:mt-[150px]">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  People are our priority
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  We place individuals at the center of all our endeavors,
                  guaranteeing that our concepts and strategies are culturally
                  diverse and consumer-oriented. We tackle strategy with a
                  pragmatic, humble, and empathetic mindset. We're convinced
                  that, in today's world, brands can't simply depend on one
                  generic message aimed at a large audience. The most potent way
                  to foster relevance and growth is to communicate uniquely and
                  specifically to individuals, based on their identity, through
                  active listening and understanding.
                </p>
              </div>
              <div id="guidance" className="mt-[80px] lg:mt-[150px]">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  Tap into our intellect
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  Submerge yourself in the present scenario of consumer
                  attention and delve into budding cultural aspects to grasp a
                  comprehensive understanding of how to foster relevance in the
                  contemporary landscape. Collaborate with some of the most
                  experienced, forward-thinking, and consumer-focused
                  strategists, creators, and media platform experts in the
                  business to unveil modern solutions for your most pressing
                  challenges. You'll leave equipped with a multitude of
                  implementable ideas ready for the market and a sturdy,
                  strategic plan to maintain your brand's relevance among a wide
                  range of consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
