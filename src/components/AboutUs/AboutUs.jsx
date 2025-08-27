import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import images from "../../assets";
import "./aboutus.css";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      // nóż – ostre wejście w połowie sekcji
      gsap.from(".app__aboutus-content_knife img", {
        y: 400, // mocniej z dołu
        opacity: 0,
        duration: 0.6, // czas i tak kontroluje scroll, ale krótkie wartości nadają feeling
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top center-=200", // odpala się gdy sekcja dojedzie bliżej środka
          end: "center center", // kończy gdy sekcja dojedzie idealnie do środka viewportu
          scrub: true,
        },
      });

      // lewy blok – po nożu
      gsap.from(".app__aboutus-content_about", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top center-=300", // chwila po nożu
          end: "center center", // pełne wejście w środku
          scrub: true,
        },
      });

      // prawy blok – po nożu
      gsap.from(".app__aboutus-content_history", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top center-=300",
          end: "center center",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
