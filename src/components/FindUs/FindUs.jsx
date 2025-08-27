import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubHeading from "../SubHeading/SubHeading";
import images from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const FindUs = () => {
  const scope = useRef(null);

  useGSAP(() => {
    // lewa kolumna (tekst + button)
    gsap.from(".app__wrapper_info > *", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: scope.current,
        start: "top center",
        end:"top top",
        scrub: true,
      },
    });

    // prawa kolumna (obrazek)
    gsap.from(".app__wrapper_img img", {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope.current,
        start: "top center",
        
        scrub: true,
      },
    });
  }, { scope });

  return (
    <div ref={scope} className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p className="p__cormorant" style={{ color: "#DCCA87", margin: "2rem 0" }}>
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;