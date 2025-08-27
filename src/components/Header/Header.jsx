import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubHeading from "../SubHeading/SubHeading";
import images from "../../assets";
import "./header.css";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const scope = useRef(null);

  useGSAP(() => {
    // Wejście tekstów po lewej (stagger)
    gsap.from(".app__wrapper_info > *", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.3,
    });

    // Wejście obrazka po prawej — po napisach
    gsap.from(".app__wrapper_img img", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1.2, // 4 elementy * 0.3s
    });

    // ScrollTrigger: obrazek skaluje się do 0.5
    gsap.to(".app__wrapper_img img", {
      scale: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: scope.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // ScrollTrigger: teksty skalują się do 0.7
    gsap.to(".app__wrapper_info", {
      scale: 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: scope.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope });

  return (
    <div ref={scope} className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
          morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
          tellus
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;