import { useEffect, useRef, useState } from "react";
import industriesBg from "../assets/images/Industries_Bg.svg";
import ProductFeatures from "../components/ProductFeature";
import product2Cricle from "../assets/images/product2_cricle.svg";
import DocPilot from "../assets/images/DocPilot.svg";
import product2Dots from "../assets/images/product2_dots.svg";

function Product2() {
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
      className="relative min-h-screen flex overflow-hidden -mt-50 py-15" 
      style={{ backgroundImage: `url(${industriesBg})` }}>
    
    
      
    <div className="relative w-full  grid md:grid-cols-2 items-center mt-50 ">
        {/* Dot 1 */}
                  <img                   
                      src={product2Dots}
                      alt="product2Dots"
                       className={`
      absolute right-70 -top-10 z-10
      
      ${visible ? "animate-[Dot-product2-slide_1.8s_ease-out_forwards]" : "opacity-0 translate-x-32"}
    `}
                  />
        {/* ================= Left SIDE ================= */}

              <div className="relative h-[600px] w-full md:justify-self-end mt-22 ">

                  {/* Healthcare */}
                  <img
                      src={DocPilot}
                      alt="DocPilot_img"
                      className={`
                      ${isMobile?" h-[350px] rounded-[50px] z-40":"absolute right-40 h-[504px] rounded-[50px] z-40 mt-10"}
                      transition-all duration-2000 delay-[2000ms]
                      ${visible ? "animate-[product2-image-slide-left_2s_ease-out_1s_forwards] " : "opacity-0 "}
                      `}
                  />

              </div>
              {/* Circle */}
          <img
            src={product2Cricle}
            alt="Circle"
            className={`
                absolute -left-100 top-1/2 -translate-y-1/2 z-30
                w-[400px] lg:w-[600px] mt-5
                transition-all duration-1000 ease-out
                ${visible
                ? "translate-x-1/2  animate-[product2-circle-overshoot-center_2s_ease-out_forwards]"
                : " opacity-0"}
                `}
          />

        {/* ================= RIGHT SIDE ================= */}
        {/* <div className="relative h-full -z-20"> */}

          {/* Circle */}
          <ProductFeatures
          title1="features and benefits."
          title2="Our Products"
          DocGradientText="DocPilot"
          BoldDescription="Streamline Document Workflows with Automation"
          feature1_text="Automates document collection, routing, and task assignments"
          feature2_text="Real-time tracking with advanced dashboards"
          feature3_text="Seamless integration with enterprise systems via APIs"
          Benifit1_text="Reduce turnaround times by 50%"
          Benifit2_text="Improve operational efficiency with minimal manual effort"
          style={`h-[504px] rounded-[50px] 
                transition-all duration-1500 delay-[2000ms]
                ${visible ? "animate-[product2-feature-slide-right_1.5s_ease-out_1s_forwards] " : "opacity-0 "}
                `}
          
          />

          
        {/* </div> */}

        

      </div>
    </section>
  );
}

export default Product2;
