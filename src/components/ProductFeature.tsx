interface productsProps{
    title1?:string
    title2?:string
    DocGradientText:string
    BoldDescription:string
    feature1_text:string
    feature2_text:string
    feature3_text:string
    Benifit1_text:String
    Benifit2_text:String
    style:string
    zindex:string
}

const ProductFeatures = (props: productsProps) => {
  return (
    <section className={`mt-24 w-full bg-white text-grey ${props.style} `} >

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 items-center px-6 ">
        
        {/* LEFT CONTENT */}
        <div className="px-8">
          
          {/* Badge */}
          <span className={`inline-flex items-center px-7 py-3.5 rounded-full 
            bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] z-30 -mt-20
             font-medium mb-5 text-white text-1xl font-[manrope] tracking-widest font-semibold text-xl`}>
            {props.DocGradientText}
          </span>

          {/* Main heading */}
          <h3 className="text-4xl font-semibold leading-snug mb-4 text-black-700 font-[Raleway]">
            {props.BoldDescription}
          </h3>

          {/* Features */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-gray-500 text-2xl">
              Features:
            </h4>
            <ul className="space-y-1 text-[#696969] text-m leading-relaxed font-[Raleway]">
              <li>• {props.feature1_text}</li>
              <li>• {props.feature2_text}</li>
              <li>• {props.feature3_text}</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-10">
            <h4 className="font-semibold mb-2 text-gray-500 text-2xl">
              Benefits:
            </h4>
            <ul className="space-y-1 text-[#696969] text-m leading-relaxed font-[Raleway]">
              <li>• {props.Benifit1_text}</li>
              <li>• {props.Benifit2_text}</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full 
              bg-[#3E6EB4] hover:bg-[#3E6EB4] 
              transition font-medium font-[Raleway] text-white">
              Learn More
            </button>

            <button className="px-8 py-3 rounded-full 
              bg-[#3E6EB4] hover:bg-[#3E6EB4] 
              transition font-medium font-[Raleway] text-white">
              Schedule a Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductFeatures;

