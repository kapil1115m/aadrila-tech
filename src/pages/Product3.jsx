import { useEffect, useRef, useState } from "react";
import industriesBg from "../assets/images/Industries_Bg.svg";
import Dot1 from "../assets/images/dots1.svg";
import ProductFeatures from "../components/ProductFeature";
import Circle2 from "../assets/images/Circle-right-faded.svg";
import Doxtract from "../assets/images/Doxtract.svg";

function Product3() {
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
      className="relative min-h-screen flex overflow-hidden -mt-40 py-10" 
      style={{ backgroundImage: `url(${industriesBg})` }}>
    
    
      
    <div className="relative w-full  grid md:grid-cols-2 items-center mt-50 ">
        {/* Dot 1 */}
                  <img                   
                      src={Dot1}
                      alt="dot1"
                      className={`
                      absolute -top-30 left-0 -z-10 
                      transition-all duration-2000 ease-out 
                      ${visible ? "animate-[Dot1-product-3-slide_3s_ease-out_forwards] " : "opacity-0"}
                    `}
                  />

        {/* ================= LEFT SIDE ================= */}
        {/* <div className="relative h-full -z-20"> */}

          {/* Circle */}
          <ProductFeatures
          title1="features and benefits."
          title2="Our Products"
          DocGradientText="Doxtract"
          BoldDescription="Extract, Validate, and Process Documents with Ease"
          feature1_text="OCR and NLP-based data extraction"
          feature2_text="Handles unstructured documents across industries"
          feature3_text="Validates fields using external data sources"
          Benifit1_text="Process 10,000+ documents in minutes"
          Benifit2_text="Achieve 99% data accuracy with AI-driven validation"
          style={` transition-all duration-2000  ${visible? " animate-[product-feature-slide-right_2s_ease-out_forwards] " 
                : " -translate-x-full"}`}
          
          />

          
        {/* </div> */}

        {/* ================= RIGHT SIDE ================= */}

              <div className="relative h-[600px] w-full md:justify-self-end mt-22 ">

                  {/* Doxtract */}
                  <img
                      src={Doxtract}
                      alt="Doxtract_img"
                      className={`
                      ${isMobile?"h-[350px] rounded-[50px] z-40":"absolute right-40 h-[504px] rounded-[50px] z-40 mt-10"}
                      transition-all duration-2000 delay-[2000ms]
                      ${visible ? "animate-[product-image-slide-left_1.5s_ease-out_1s_forwards] " : "opacity-0"}
                      `}
                  />

              </div>
              {/* Circle */}
          <img
            src={Circle2}
            alt="Circle"
            className={`
                absolute right-0 top-1/2 -translate-y-1/2 z-30
                w-[400px] lg:w-[600px] mt-5
                transition-all duration-1000 ease-out
                ${visible
                ? "translate-x-1/2  animate-[product3-overshoot-center-from-right_2s_ease-out_forwards]"
                : " opacity-0"}
                `}
          />

      </div>
    </section>
  );
}

export default Product3;
