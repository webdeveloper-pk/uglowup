import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

import plus from "../assets/images/crossline.png";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    const { selectedLanguage } = this.props;

    return (
      <div id="services">
        <div className="text-light-white px-6 md:px-12 lg:px-16 py-12 md:py-24 homepage-container mx-auto">
          <div className="flex items-start gap-x-8">
            <div className="hidden md:block" data-aos="fade-right">
              <img src={plus} alt="plus-icon" width="100px" />
            </div>
            {/* main div */}
            <div className="flex flex-col md:flex-row gap-y-12 justify-between items-start gap-x-8 md:gap-x-12 lg:gap-x-24">
              <nav
                className="flex flex-col gap-y-4 uppercase text-[20px] lg:text-[30px] menu-fixed"
                data-aos="fade-right"
              >
                <Link
                  activeClass="active"
                  to="firstInsideContainer"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  className="hover:cursor-pointer"
                >
                  {selectedLanguage === "eng" ? "innovations" : "nouveautés"}
                </Link>
                <Link
                  activeClass="active"
                  to="secondInsideContainer"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  className="hover:cursor-pointer"
                >
                  {selectedLanguage === "eng" ? "plateforms" : "plates-formes"}
                </Link>
                <Link
                  activeClass="active"
                  to="thirdInsideContainer"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  className="hover:cursor-pointer"
                >
                  {selectedLanguage === "eng" ? "strategy" : "stratégie"}
                </Link>
                <Link
                  activeClass="active"
                  to="fourthInsideContainer"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  className="hover:cursor-pointer"
                >
                  {selectedLanguage === "eng" ? "guidance" : "conseils"}
                </Link>
              </nav>
              <Element
                name="test7"
                className="element lg:pr-10 xl:pr-28"
                id="containerElement"
                style={{
                  position: "relative",
                  height: "300px",
                  overflow: "scroll",
                }}
              >
                <Element
                  name="firstInsideContainer"
                  style={{
                    marginBottom: "120px",
                  }}
                >
                  <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6 ">
                    {selectedLanguage === "eng"
                      ? "Unleashing the power of curiosity"
                      : "Libérer le pouvoir de la curiosité"}
                  </h1>
                  <p className="font-light text-xs lg:text-base text-light-white">
                    {selectedLanguage === "eng"
                      ? "We have become a potent narrative platform that puts the consumer at the heart of our storytelling. We harness the full strength of our collective creativity, including both client and agency, to discern what resonates with the consumers rather than relying on speculation or personal bias. The outcome? Impactful, effective creatives that are driven by consumer insights."
                      : "Nous sommes devenus une plateforme narrative puissante qui place le consommateur au cœur de notre narration. Nous exploitons toute la force de notre créativité collective, y compris le client et l'agence, pour discerner ce qui résonne avec les consommateurs plutôt que de nous fier à la spéculation ou aux préjugés personnels. Le résultat? Des créations percutantes et efficaces basées sur les connaissances des consommateurs."}
                  </p>
                </Element>
                <Element
                  name="secondInsideContainer"
                  style={{
                    marginBottom: "120px",
                    paddingTop: "50px",
                  }}
                >
                  <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                    {selectedLanguage === "eng"
                      ? "Actual business results"
                      : "Résultats réels de l'entreprise"}
                  </h1>
                  <p className="font-light text-xs lg:text-base text-light-white">
                    {selectedLanguage === "eng"
                      ? "Our priority is real-world business results, not just theoretical reach. Our unwavering commitment is to bolster brands by achieving tangible outcomes. We accomplish this through an intensive understanding of, and respect for, the platforms where consumers invest their time. We've developed contemporary strategies for planning, purchasing, and analytics designed to prompt consumer action."
                      : "Notre priorité est les résultats commerciaux réels, pas seulement la portée théorique. Notre engagement inébranlable est de renforcer les marques en obtenant des résultats tangibles. Nous y parvenons grâce à une compréhension approfondie et au respect des plateformes sur lesquelles les consommateurs investissent leur temps. Nous avons développé des stratégies contemporaines de planification, d'achat et d'analyse conçues pour inciter les consommateurs à agir."}
                  </p>
                  <p className="mt-6 ont-light text-xs lg:text-base text-light-white">
                    {selectedLanguage === "eng"
                      ? " Our focus is on understanding and maximizing consumer  attention, ensuring content relevance, and delivering demonstrable results."
                      : "Notre objectif est de comprendre et de maximiser l'attention des consommateurs, d'assurer la pertinence du contenu et de fournir des résultats démontrables."}
                  </p>
                </Element>
                <Element
                  name="thirdInsideContainer"
                  style={{
                    marginBottom: "120px",
                    paddingTop: "50px",
                  }}
                >
                  <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                    {selectedLanguage === "eng"
                      ? "People are our priority"
                      : "Les gens sont notre priorité"}
                  </h1>
                  <p className="font-light text-xs lg:text-base text-light-white">
                    {selectedLanguage === "eng"
                      ? "We place individuals at the center of all our endeavors, guaranteeing that our concepts and strategies are culturally diverse and consumer-oriented. We tackle strategy with a pragmatic, humble, and empathetic mindset. We're convinced that, in today's world, brands can't simply depend on one generic message aimed at a large audience. The most potent way to foster relevance and growth is to communicate uniquely and specifically to individuals, based on their identity, through active listening and understanding."
                      : "Nous plaçons les individus au centre de tous nos efforts, garantissant que nos concepts et stratégies sont culturellement diversifiés et orientés vers le consommateur. Nous abordons la stratégie avec un état d'esprit pragmatique, humble et empathique. Nous sommes convaincus que, dans le monde d'aujourd'hui, les marques ne peuvent pas se contenter d'un message générique destiné à un large public. Le moyen le plus puissant de favoriser la pertinence et la croissance est de communiquer de manière unique et spécifique avec les individus, en fonction de leur identité, par le biais d'une écoute et d'une compréhension actives."}
                  </p>
                </Element>
                <Element
                  name="fourthInsideContainer"
                  style={{
                    marginBottom: "100px",
                    paddingTop: "50px",
                  }}
                >
                  <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                    {selectedLanguage === "eng"
                      ? "Tap into our intellect"
                      : "Puisez dans notre intellect"}
                  </h1>
                  <p className="font-light text-xs lg:text-base text-light-white">
                    {selectedLanguage === "eng"
                      ? "Submerge yourself in the present scenario of consumer attention and delve into budding cultural aspects to grasp a comprehensive understanding of how to foster relevance in the contemporary landscape. Collaborate with some of the most experienced, forward-thinking, and consumer-focused strategists, creators, and media platform experts in the business to unveil modern solutions for your most pressing challenges. You'll leave equipped with a multitude of implementable ideas ready for the market and a sturdy, strategic plan to maintain your brand's relevance among a wide range of consumers."
                      : "Plongez-vous dans le scénario actuel de l'attention des consommateurs et plongez dans les aspects culturels naissants pour saisir une compréhension globale de la façon de favoriser la pertinence dans le paysage contemporain. Collaborez avec certains des stratèges, créateurs et experts des plateformes multimédias les plus expérimentés, avant-gardistes et axés sur le consommateur du secteur pour dévoiler des solutions modernes à vos défis les plus pressants. Vous repartirez équipé d'une multitude d'idées réalisables prêtes pour le marché et d'un plan stratégique solide pour maintenir la pertinence de votre marque auprès d'un large éventail de consommateurs."}
                  </p>
                </Element>
              </Element>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
