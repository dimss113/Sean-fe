import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="w-[90%] grid grid-cols-2 mx-auto text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px] justify-items-center items-center">
        <div className="col-span-2 sm:col-span-1 relative w-[11.791666em] h-[12.2083333em] ">
          <div className="absolute right-[1.6666666em] top-0 w-[9.79166666em] h-[6.645833333em]">
            <img
              src="Images/vet.jpg"
              alt="group"
              className="w-full object-contain"
            />
          </div>

          <div className="absolute -left-[1.333em] bottom-[2.5em] w-[4.5525em] h-[4.5525em]">
            <img
              src="Images/sean-logo.png"
              alt="sean-logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 px-10  flex flex-col justify-start items-start">
          <p className="font-poppins my-2 font-[400] leading-8 uppercase text-[#EF6D58] text-[0.33333em]">
            about
          </p>
          <h1 className="font-[700] my-2 font-poppins text-black text-[1.166666em]">
            Pet Care Agency
          </h1>
          <p className="font-poppins my-2 font-[400] text-[0.416666em] text-[#391400]">
            Provides a full service range
          </p>
          <p className="font-poppins my-2 font-[400] text-[#391400A3] text-[0.33333em]">
            Our vision is to create an ecosystem that makes pet care more
            accessible, affordable, and efficient. We dream of a future where
            every pet receives the best care without sacrificing the convenience
            or finances of their owners. We aim to eliminate barriers to access
            to veterinary services so that every animal can live a healthy,
            happy, and comfortable life.
          </p>

          <div className="group cursor-pointer hover:scale-110 transition-all duration-150 w-[2.875em] bg-second h-[1em] flex justify-center items-center">
            <p className="group-hover:scale-110 transition-all duration-150 font-poppins font-[900] text-black text-[0.29166666em]">
              ABOUT US
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
