import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="relative flex justify-center items-center mt-10">
      {/* Circle Image */}
      <img
        src="/interactive-pricing-component-main/images/pattern-circles.svg"
        alt="Background circle"
        className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"  
      />
      {/* Text on top of the image */}
      <div className="absolute text-center w-full">
  <h2 className="text-xl font-bold text-[#081154] whitespace-nowrap">
    Simple, traffic-based pricing
  </h2>
  <p className="text-base text-gray-500">Sign-up for our 30-day trial. No credit card required.</p>
</div>

    </div>
  );
};

export default HeaderComponent;
