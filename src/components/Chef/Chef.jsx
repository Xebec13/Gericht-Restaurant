import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubHeading from "../SubHeading/SubHeading";
import images from "../../assets";
import "./Chef.css";

gsap.registerPlugin(ScrollTrigger);

const Chef = () => {
  const scope = useRef(null);

  useGSAP(() => {
    // obrazek po lewej
    gsap.from(".app__wrapper_img img", {
      x: -50,
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope.current,
        start: "top center",  // kiedy sekcja zaczyna się pojawiać
        toggleActions: "play none none reverse",
      },
    });

    // wszystkie teksty po prawej, po kolei
    gsap.from(".app__wrapper_info > *", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.4,
      scrollTrigger: {
        trigger: scope.current,
        start: "top 70%",  // zaczyna chwilę później niż obrazek
        toggleActions: "play none none play",
      },
    });
  }, { scope });

  return (
    <div ref={scope} className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
            lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;