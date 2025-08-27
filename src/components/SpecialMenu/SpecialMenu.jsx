import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubHeading from "../SubHeading/SubHeading";
import MenuItem from "../MenuItem/MenuItem";
import images from "../../assets";
import "./specialmenu.css";

gsap.registerPlugin(ScrollTrigger);

const wines = [
  { title: "Chapel Hill Shiraz", price: "$56", tags: "AU | Bottle" },
  { title: "Catena Malbee", price: "$59", tags: "AU | Bottle" },
  { title: "La Vieillw Rose", price: "$44", tags: "FR | 750 ml" },
  { title: "Rhino Pale Ale", price: "$31", tags: "CA | 750 ml" },
  { title: "Irish Guinness", price: "$26", tags: "IE | 750 ml" },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  { title: "Daiquiri", price: "$10", tags: "Rum | Citrus juice | Sugar" },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const SpecialMenu = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      // tytuł sekcji
      gsap.from(".app__specialMenu-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
          scrub: true,
        },
      });

      // lewa kolumna (Wine & Beer)
      gsap.from(".app__specialMenu-menu_wine", {
        x: -250,
        opacity: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",

          scrub: true,
        },
      });
      // prawa kolumna (Cocktails)
      gsap.from(".app__specialMenu-menu_cocktails", {
        x: 250,
        opacity: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
          scrub: true,
        },
      });

      // obrazek menu – zoom-out na scroll
gsap.fromTo(".app__specialMenu-menu_img img",
  { scale: 1 },   // początek
  {
    scale: 0.6,   // końcowa skala
    ease: "none",
    scrollTrigger: {
      trigger: scope.current,
      start: "top bottom",   // gdy sekcja zacznie się pojawiać
      end: "bottom top",     // do końca sekcji
      scrub: true,           // efekt powiązany ze scroll
    },
  }
);
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="app__specialMenu flex__center section__padding"
      id="menu"
    >
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
