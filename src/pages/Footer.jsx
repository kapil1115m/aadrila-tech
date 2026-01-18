import React from "react";
import InquiryCard from "../components/InquiryCard.jsx";
import ContactUS_text from "../assets/images/ContactUs_text.svg";
import Footer_Title_text from "../assets/images/Footer_Title_text.svg";
import US_Office_Address from "../assets/images/US_Office_Address.svg";
import Indian_Office_Address from "../assets/images/Indian_Office_Address.svg";
import FooterCard from "../assets/images/Footer.svg";
import Dot1 from "../assets/images/dots1.svg";
import { useEffect, useRef, useState } from "react";


const Footer = () => {

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
    <footer className="bg-white text-white relative w-full mt-20 overflow-hidden" ref={sectionRef}>
      {/* Contact Section */}
      <div className="max-w-full mx-auto px-16 pt-16 pb-0 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
       
        <div className={`space-y-10 h-full mt-40 ${visible?"animate-[contactUS-slide-right_2s_ease-out_forwards]":"-translate-x-full"}`}>
          <img src={ContactUS_text}/>
          <img src={Footer_Title_text}/>
          <a href="https://www.aadrila.com/">
            <img src={US_Office_Address}/>
          </a>
          <div className="mt-10">
            <a href="https://www.aadrila.com/" className="">
                <img src={Indian_Office_Address}/>
            </a>
          </div>
          
        </div>

        {/* Right: Inquiry Card */}
        <InquiryCard className={`relative bottom-10 z-40 ${visible?"animate-[Inquiry-card-slide-top_2s_ease-out_forwards]":"opacity-0"}`}/>
      </div>
         <img
            src={Dot1}
            className={`absolute top-30 -left-30 ${visible?"animate-[contact-dot-slide-right_6s_ease-out_forwards]":"-translate-x-full"}`}
        />
      {/* Footer Bottom */}
      <div className="w-full leading-none relative bottom-0">
        <img src={FooterCard} className={` block w-full h-auto leading-none${visible?"animate-[Inquiry-card-slide-top_2s_ease-out_forwards]":"opacity-0"}`}/>
      </div>
    </footer>
  );
};

export default Footer;
