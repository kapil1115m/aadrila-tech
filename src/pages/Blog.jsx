import leftdots from "../assets/images/Blog_dot1.svg";
import rightdots from "../assets/images/Blog_dots2.svg";
import card1 from "../assets/images/blog_card1.svg";
import card2 from "../assets/images/blog_card2.svg";
import card3 from "../assets/images/blog_card3.svg";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import shape from "../assets/images/blog_bottom_shape.svg";
import { useEffect, useRef, useState } from "react";


const Blogs = () => {
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
    <section className="relative bg-white py-24 overflow-hidden -mt-10" ref={sectionRef}>

      {/* LEFT DOTS */}
      <img
        src={leftdots}
        alt="left dots img"
        className={`absolute top-10 left-10 opacity-80 ${visible?"animate-[Dot-product-1-slide_2s_ease-out_forwards] z-30" : "opacity-0 -translate-x-52"}`}
      />

      {/* RIGHT DOTS */}
      <img
        src={rightdots}
        alt=""
        className={`absolute top-60 right-0 opacity-100 -z-0 ${visible? "animate-[Blog-dot2-from-right-left_2s_ease-out_forwards] " : "opacity-0 -translate-x-52"}`}
      />

      {/* HEADING */}
      <div className={`text-center mb-20 relative z-10 
        ${visible ? "absolute -top-10 transition-all duration-2000 ease-out animate-[product-title-slide-down_2s_ease-out_forwards]" 
        : "opacity-0 -translate-y-32"}`}>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          Blogs
        </h2>

        <p className={`
                    text-lg md:text-xl font-[manrope] font-normal text-2xl tracking-normal
                    bg-gradient-to-r from-[#CD6028] from-0% via-[#CD6028] via-25% to-[#3E6EB4]
                    bg-clip-text text-transparent max-w-5xl mx-auto
                    transition-all duration-1000 ease-out 
                `}>
          <span className="">
            Lorem Ipsum
          </span>{" "}
          <span className="">
            is simply dummy text of the printing and typesetting industry.
          </span>
          <br />
          <span className="">
            Lorem Ipsum
          </span>{" "}
          <span className="">
            has been the industry's standard.
          </span>
        </p>
      </div>

  {/* CARDS */}
  <div className="relative z-20 grid md:grid-cols-3 gap-14 px-10 max-w-7xl mx-auto -mt-10">

  {/* CARD 1 */}
  <div className="flex flex-col items-center justify-center w-full ">
    <img
      src={card1}
      alt="Blog 1"
      className={`w-[343px] h-[235px] ${visible?"animate-[Blog-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}
    />
    <img
      src={shape}
      alt=""
      className={`mt-[-80px] -z-10 w-[392px] ${visible?"animate-[Blog-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}
    />
  </div>

  {/* CARD 2 */}
  <div className="flex flex-col items-center justify-center">
    <img
      src={card2}
      alt="Blog 2"
      className={`w-[343px] h-[235px] ${visible?"animate-[Blog-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}
    />
    <img
      src={shape}
      alt=""
      className={`mt-[-80px] -z-10 w-[392px] ${visible?"animate-[Blog-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}
    />
  </div>

  {/* CARD 3 */}
  <div className="flex flex-col items-center justify-center z-20">
    <img
      src={card3}
      alt="Blog 3"
      className={`w-[343px] h-[235px] ${visible?"animate-[Blog-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}
    />
    <img
      src={shape}
      alt=""
      className={`mt-[-80px] -z-10 w-[392px] ${visible?"animate-[Blog-div-slide-top_2s_ease-out_forwards]":"opacity-0"}`}
    />
  </div>

</div>

      {/* NAVIGATION */}
      <div className={`flex justify-center gap-4 mt-20 relative z-10 ${visible?"animate-[Blog-div-slide-top_3s_ease-out_forwards]":"opacity-0"}`}>
        <button className="w-12 h-12 rounded-lg bg-[#2F5DA9] flex items-center justify-center">
          <img src={leftArrow} alt="prev" />
        </button>
        <button className="w-12 h-12 rounded-lg bg-[#2F5DA9] flex items-center justify-center">
          <img src={rightArrow} alt="next" />
        </button>
      </div>

    </section>
  );
};

export default Blogs;
