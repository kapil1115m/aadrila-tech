import React from "react";

// background
import aboutBg from "../assets/images/aboutus_bg.svg";

// bands
import aboutusHeading from "../assets/images/aboutus_heading.svg";
import about_leftFrame from "../assets/images/about_leftFrame.svg";
import about_rightFrame from "../assets/images/about_rightFrame.svg";
import { useEffect, useRef, useState } from "react";

const AboutUsUI = () => {

    const sectionRef = useRef(null);
          const [visible, setVisible] = useState(false);
        
           useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setVisible(true);
              } else {
                setVisible(false); // 👈 reset when out of view
              }
            },
            { threshold: 0.3 }
          );
        
          if (sectionRef.current) observer.observe(sectionRef.current);
        
          return () => observer.disconnect();
        }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* BAND 1 */}
      <div className="flex justify-center pt-[4%]">
        <img
          src={aboutusHeading}
          alt="About Us"
          className={`max-w-[38%] w-full -mt-15 ${visible?"animate-[about-middle-slide-down_2s_ease-out_forwards]":"opacity-0"}`}
        />
      </div>

      {/* BAND 2 */}
      <div className="flex justify-start mt-20">
        <img
          src={about_leftFrame}
          alt="Our Vision"
          className={`max-w-[60%] h-[200px] ${visible?"animate-[about-left-frame-slide_2s_ease-out_forwards] transition-all duration-1500 ease-out":"opacity-0"}`}
        />
      </div>

      {/* BAND 3 */}
      <div className="flex justify-end mt-8">
        <img
          src={about_rightFrame}
          alt="Our Mission"
          className={`max-w-[60%] h-[200px] ${visible?"animate-[about-right-frame-slide_2s_ease-out_forwards] transition-all duration-1500 ease-out":"opacity-0"}`}
        />
      </div>
    </section>
  );
};

export default AboutUsUI;
