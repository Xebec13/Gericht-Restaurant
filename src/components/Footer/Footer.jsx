import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import SubHeading from "../SubHeading/SubHeading";
import images from "../../assets";
import "./footer.css";

gsap.registerPlugin(ScrollTrigger);

const FooterOverlay = () => (
  <div className="app__footerOverlay">
    <div className="app__footerOverlay-black" />
    <div className="app__footerOverlay-img app__bg" />
  </div>
);

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

const Footer = () => {
  const scope = useRef(null);

  useGSAP(() => {
    // animacja Newsletter (scale + opacity)
    gsap.from(".app__newsletter", {
      scale: 0.8,
      opacity: 0.5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope.current,
        start: "top 90%",
        scrub: true,
      },
    });

    // Reveal dla trzech kolumn w footerze
    gsap.from(".app__footer-links > div", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: scope.current,
        start: "top 85%",
        scrub: true,
      },
    });
  }, { scope });

  return (
    <div ref={scope} className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
          </p>
          <img src={images.spoon} alt='spoon' className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;