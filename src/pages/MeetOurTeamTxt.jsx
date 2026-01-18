import Industries_Circle from "../assets/images/Industries_Circle.svg";
import MeetOurTeamTxt from "../assets/images/MeetOurTeam.svg";
import profile1 from "../assets/images/profile1.svg";
import profile2 from "../assets/images/profile2.svg";
import profile3 from "../assets/images/profile3.svg";
import CEO_description from "../assets/images/CEO_description.svg";
import Dot2 from "../assets/images/dots2.svg";
import meetText from "../assets/images/MeetText.svg";
import kiteShape from "../assets/images/kiteShape.svg";
import { useState, useEffect, useRef } from "react";
import leftarrow from "../assets/images/left-arrow.svg";
import rightarrow from "../assets/images/right-arrow.svg";

function MeetOurTeam() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(1);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    // Trigger the scale animation on index change
    setScale(false); // reset
    const timeout = setTimeout(() => setScale(true), 50); // slight delay
    return () => clearTimeout(timeout);
  }, [index]);

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

  const team = [
    {
      id: 1,
      name: "Aarav Mehta",
      role: "CEO FutureSphere",
      image: profile2,
      ceoDescription:CEO_description,
      description:
        "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place."
    },
    {
      id: 2,
      name: "Mansi Shukla",
      role: "CTO FutureSphere",
      image: profile1,
      ceoDescription:CEO_description,
      description:
        "Technology should empower people, not intimidate them. We build systems that feel natural and intuitive."
    },
    {
      id: 3,
      name: "Riya Verma",
      role: "COO FutureSphere",
      image: profile3,
      ceoDescription:CEO_description,
      description:
        "Operational excellence is about clarity, speed, and human-centered execution."
    }
  ];


  const prev = () => {
    // setIndex((prev) => Math.max(prev - 1, 0));
    setIndex(prev => prev - 1)
  };

  const next = () => {
    setIndex(prev => prev + 1)
    // setIndex((prev) => Math.min(prev + 1, team.length - 1));
  };


  const current = team[index];




  return (
    <section className="relative w-full bg-white overflow-hidden py-24 z-0" ref={sectionRef}>

      {/* Background / arc */}
      <img
        src={Industries_Circle}
        alt="background"
        className="absolute left-0 top-20 "
      />

      {/* Content wrapper */}
      <div className="relative w-full mx-auto px-6 text-center">

       <div className={`relative -top-10
        ${visible ? " transition-all duration-2000 ease-out animate-[Meet-Title-slide-top_2s_ease-out_forwards]" 
        : "opacity-0"}`}>
         {/* Heading */}
        <img
          src={MeetOurTeamTxt}
          alt="Meet our team"
          className={`mx-auto relative`}
        />

        {/* Subtitle */}
        <img
          src={meetText}
          alt="subtitle"
          className="mx-auto mt-4"
        />
       </div>

        {/* Arrows */}
        <div className={`flex justify-center gap-4 mt-10 relative z-50  ${visible?"animate-[team-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}>
          <button
            onClick={prev}
            disabled={index === 0}
            className={`w-12 h-12 rounded-lg flex items-center justify-center
    ${index === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#2F5DA9]"}`}
          >
            <img src={leftarrow} alt="prev" />
          </button>

          <button
            onClick={next}
            disabled={index === 2}
            className={`w-12 h-12 rounded-lg flex items-center justify-center
    ${index === team.length - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#2F5DA9]"}`}
          >
            <img src={rightarrow} alt="next" />
          </button>

        </div>




        <div className={`relative flex items-center overflow-hidden h-[260px] mt-16 mb-32 p-6 ${visible?"animate-[team-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}>
          <div
            className={`relative w-full flex items-center ${index == 0 ? "justify-end" : index == 2 ? "justify-start" : "justify-center"}  gap-24
               transition-transform duration-400 ease-out `}

          >
            {team.map((member, i) => (
              <img
                key={member.id}
                src={member.image}
                alt={member.name}
                className={`
          ${isMobile ? "w-40 h-40 absolute left-30 right-40" : "w-52 h-52"} rounded-full object-cover border-1
          transition-transform duration-500
          ${i === index
                    ? "scale-120 border-[#CD6028] z-20 animate-[team-fade-anim_2s_ease-out_forwards]"
                    : "scale-90 border-transparent opacity-100 "}
        `}
              />
            ))}
          </div>
        </div>


        {/* Info card */}
        <div className={`relative -top-70 ${visible?"animate-[team-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}>
  {/* Kite */}
  <img
    src={kiteShape}
    alt="kite shape"
    className={`mx-auto relative -z-10
      ${isMobile
        ? "w-[80px] h-[80px] top-40"
        : "w-[180px] h-[180px] top-45"
      }`}
  />

  {/* Dynamic CEO Description */}
  <img
    key={team[index].id} // forces smooth re-render
    src={team[index].ceoDescription}
    alt={`${team[index].name} description`}
    className={`
      mx-auto mt-10 z-10
      w-[1200px] h-[239px]
      transition-transform duration-[4000ms] ease-out
      ${scale ? "scale-100 opacity-100" : "scale-10 opacity-0"}
    `}
  />
</div>


      </div>

      {/* Dots decoration */}
      <img
        src={Dot2}
        alt="dots"
        className={`absolute right-10 top-52 hidden md:block  ${visible?"animate-[Blog-dot2-from-right-left_2s_ease-out_forwards]":"opacity-0"}`}
      />
    </section>
  );
}

export default MeetOurTeam;
