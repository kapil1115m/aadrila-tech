import backgroundImage from '../assets/images/background.png'
import license from '../assets/images/License.svg'
import Doc from '../assets/images/Doc.svg'
import Invoice from '../assets/images/Invoice.svg'
import { useEffect, useState } from "react";

function Hero() {

    const images = [Doc,license,Invoice];

   const positions = [
  { x: -220, scale: 0.9, z: 10, opacity: 1,size:180}, // LEFT
  { x: 0, scale: 1.1, z: 30, opacity: 1,size:320 },     // CENTER
  { x: 220, scale: 0.9, z: 20, opacity: 1,size:180}, // RIGHT
];


    const [centerIndex, setCenterIndex] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);



  return (
    <section className="relative min-h-screen w-full flex items-center">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
        style={{ backgroundImage: `url(${backgroundImage})`}}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid grid-cols-1 md:grid-cols-2 gap-50">
        
        {/* Left content */}
        <div className='mt-32'>
          <h1 className="text-[48px] font-bold leading-tight text-start font-[Raleway] ">
            <span className="bg-linear-to-r from-[#F36A2E] to-[#3E6EB4] bg-clip-text text-transparent">AI-Powered</span><br />
            <span className='whitespace-nowrap'>Document Automation</span><br />
            & Fraud Detection
          </h1>

          <p className="text-[20px] text-start mt-6 text-black-500 max-w-lg font-[Manrope]">
           Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#3E6EB4] text-white px-6 py-3 w-1/2 rounded-full">
              Get a Demo
            </button>
            <button className="bg-[#3E6EB4] text-white px-6 py-3 w-1/2 rounded-full">
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Right illustration */}
        {/* <div className="flex justify-center mt-20">
          <img src={Invoice} alt="Invoice" className='-mr-7 w-52'/>
          <img src={license} alt="License" className='-mr-7 w-90'/>
          <img src={Doc} alt="Doc" className='w-52'/>
        </div> */}
        <div className="relative flex items-center justify-center mt-30 w-full">
  {images.map((img, imgIndex) => {
    const posIndex =
      (imgIndex - centerIndex + images.length) % images.length;

    const { x, scale, z, opacity,size } = positions[posIndex];

    return (
      <img
        key={imgIndex}
        src={img}
        alt="Document"
        className="absolute transition-all duration-[2000ms] ease-in-out will-change-transform"
        style={{
          width:`${size}px`,
          transform: `translateX(${x}px) scale(${scale})`,
          zIndex: z,
          opacity: opacity,
          filter: posIndex === 1 ? "blur(0px)" : "blur(3px)"
        }}
      />
    );
  })}
</div>

      </div>
    </section>
  );
}

export default Hero;
