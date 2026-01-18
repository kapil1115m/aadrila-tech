import { useEffect, useRef, useState } from "react";
import industriesBg from "../assets/images/Industries_Bg.svg";
import Dot1 from "../assets/images/dots1.svg";
import ProductFeatures from "../components/ProductFeature";
import DocSim from "../assets/images/DocSim.svg";
import productHeadingImg from "../assets/images/OurProduct_Heading.svg";
import Circle2 from "../assets/images/Circle-right-faded.svg"

function Product1() {
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
      className="relative min-h-screen flex overflow-hidden isolate pb-8 " 
      style={{ backgroundImage: `url(${industriesBg})` }}>
    
    
      
    <div className="relative w-full  grid md:grid-cols-2 items-center mt-50">
        {/* Dot 1 */}
                  <img                   
                      src={Dot1}
                      alt="dot1"
                      className={`
                      absolute -top-30 left-0
                      transition-all duration-2000 ease-out
                      ${visible ? "animate-[Dot-product-1-slide_2s_ease-out_forwards] z-30" : "opacity-0 -translate-x-52"}
                    `}  
                  />
        <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-full flex justify-center z-60">
                <img
                src={productHeadingImg}
                alt="Our Products"
                className={visible?
                    "max-w-full transition-all duration-2000 ease-out animate-[product-title-slide-down_2s_ease-out_forwards]"
                    : "opacity-0 -translate-y-32"}
                />
        </div>

        {/* ================= LEFT SIDE ================= */}
        <div className="relative h-full ">

          {/* Circle */}
          <ProductFeatures
          title1="features and benefits."
          title2="Our Products"
          DocGradientText="DocSim"
          BoldDescription="AI-Powered Document Similarity Engine"
          feature1_text="Detects near-duplicates and tampered documents"
          feature2_text="Identifies fraudulent patterns across large repositories"
          feature3_text="Multi-language support for global adaptability"
          Benifit1_text="Save 30% time on manual checks"
          Benifit2_text="Reduce document fraud by up to 40%"
          style={visible? " animate-[product-feature-slide-right_2s_ease-out_forwards] transition-all duration-1500 ease-out" 
                : "-translate-x-[20%] opacity-0"}
          />

          
        </div>

        {/* ================= RIGHT SIDE ================= */}

              <div className="relative h-[600px] w-full md:justify-self-end mt-22 ">

                  {/* Healthcare */}
                  <img
                      src={DocSim}
                      alt="DocSim_img"
                      className={`
                      ${isMobile?" h-[350px] rounded-[50px] z-40":"absolute right-40 h-[504px] rounded-[50px] z-40"}
                      transition-all duration-1500 delay-[2000ms]
                      ${visible ? "animate-[product-image-slide-left_1.5s_ease-out_1s_forwards] " : "opacity-0 "}
                      `}
                  />

              </div>
              {/* Circle */}
          <img
            src={Circle2}
            alt="Circle"
            className={`
                ${isMobile?"-z-10 absolute right-0 top-1/2 -translate-y-1/2 ":"absolute right-0 top-1/2 -translate-y-1/2 z-20"}
                w-[400px] lg:w-[600px] mt-5
                transition-all duration-1000 ease-out
                ${visible
                ? "translate-x-1/2  animate-[overshoot-center-from-right_2s_ease-out_forwards]"
                : " opacity-0"}
                `}
          />

      </div>
    </section>
  );
}

export default Product1;
