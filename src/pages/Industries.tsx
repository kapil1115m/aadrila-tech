import { useEffect, useRef, useState } from "react";

// LEFT
import circleImg from "../assets/images/Industries_Circle.svg";

// RIGHT cards
import insuranceCard from "../assets/images/Insurance.svg";
import lendingCard from "../assets/images/Lending.svg";
import healthcareCard from "../assets/images/Healthcare.svg";
import backgroundImg from "../assets/images/Industries_Bg.svg";
import industriesBg from "../assets/images/Industries_Bg.svg";
import industries_heading from "../assets/images/Industries_headingframe.svg";
import Dot1 from "../assets/images/dots1.svg";
import Industries_dots2 from "../assets/images/dots2.svg";

function Industries() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);

      if (e.matches) {
        console.log("📱 Mobile device");
      } else {
        console.log("💻 Tablet / Desktop");
      }
    };

    // run once on mount
    handleChange(mediaQuery);

    // listen for resize
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);


  useEffect(() => {
    console.log("isMobile",isMobile);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% visible triggers animation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex overflow-hidden isolate pb-30"
      style={{ backgroundImage: `url(${industriesBg})` }}>

      <div className={`relative w-full  grid grid-cols-1 md:grid-cols-2 items-center ${isMobile?"mt-80":"mt-20"}`}>

        {/* ================= LEFT SIDE ================= */}
        <div className={isMobile?"flex flex-col justify-center align-middle":"relative h-full"}>

          {/* Circle */}
          <img
            src={circleImg}
            alt="Circle"
            className={`
                ${isMobile?"absolute top-1":"absolute left-1/2 top-1/2 -translate-y-1/2"}
                ${isMobile?"w-100px":"w-[900px] lg:w-[1050px]"}  mt-5
                transition-all duration-3000 ease-out
                ${visible
                ? "-translate-x-1/2 opacity-100 animate-[overshoot-center_2s_ease-out_forwards]"
                : "-translate-x-[120%] opacity-0"}
                `}
          />

          {/* Text */}
          <div
            className={`
              transition-all duration-2000 delay-150 ease-out w-full 
              ${visible
                ? "opacity-100 translate-x-30"
                : "opacity-0 -translate-x-20"}
            `}
          >
            <img
              src={industries_heading}
              alt="Industries Heading"
              className={isMobile?"w-[500px]":" w-[1000px]"}
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        {/* ================= RIGHT SIDE ================= */}
        <div className="relative h-[600px] w-full md:justify-self-end ">

          {/* Healthcare */}
          <img
            src={healthcareCard}
            alt="Healthcare"
            className={`
      ${isMobile?"align-middle":"absolute right-40"}
      transition-all duration-700 delay-300 ease-out
      ${isMobile?"z-50 w-[200px] h-[200px]": `${visible ? "animate-[card-1-slant_1.6s_ease-out_forwards]" : "opacity-0 "}`}

    `}
          />

          {/* Lending */}
          <img
            src={lendingCard}
            alt="Lending"
            className={`
      ${isMobile?"relative top-1 translate-x-40":"absolute right-40"}
      transition-all duration-700 delay-150 ease-out
      ${isMobile?"z-50 w-[200px] h-[200px]": `${visible ? "animate-[card-2-slant_1.8s_ease-out_forwards]" : "opacity-0 translate-x-32"}`}
    `}
          />

          {/* Insurance */}
          <img
            src={insuranceCard}
            alt="Insurance"
            className={`
      ${isMobile?"relative top-1 ":"absolute right-40"}
      transition-all duration-2000 ease-out
      ${isMobile?"z-50 w-[200px] h-[200px]  ": `${visible ? "animate-[card-3-slant_1.8s_ease-out_forwards]" : "opacity-0 translate-x-32"}`}

    `}
          />
          {/* Dot 1 */}
          <img
            src={Dot1}
            alt="dot1"
            className={`
      absolute right-0 bottom-0
      transition-all duration-2000 ease-out
      ${visible ? "animate-[Dot-industries-1-slide_1.8s_ease-out_forwards]" : "opacity-0 translate-x-32"}
    `}
          />
          {/* Dot 2 */}
          <img
            src={Industries_dots2}
            alt="dot-industries-2"
            className={`
      absolute right-110 -top-10 -z-10
      transition-all duration-2000 ease-out
      ${visible ? "animate-[Dot-industries-2-slide_1.8s_ease-out_forwards]" : "opacity-0 translate-x-32"}
    `}
          />

        </div>

      </div>
    </section>
  );
}

export default Industries;
