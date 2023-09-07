import React from "react";

const FeatureSection = () => {
  return (
    <>
      <div className="flex flex-row w-[90%] mx-auto justify-center items-center my-20">
        <div className="basis-1/2 w-[11.8em] h-[7.6em] flex ">
          <img
            src="Images/schedule.png"
            alt="schedule"
            className="w-full object-contain"
          />
        </div>
        <div className="basis-1/2 flex flex-col mx-4">
          <p className="uppercase font-poppins font-[400] text-[#EF6D58] text-[0.3333333em]">
            1st Feature
          </p>
          <p className="font-poppins font-[800] text-dark text-[0.833333em]">
            Pet Care's Scheduling
          </p>
          <p className="font-poppins font-[400] text-[#391400A3] text-[0.33333em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="flex flex-row w-[90%] mx-auto justify-center items-center my-20">
        <div className="basis-1/2 flex flex-col mx-4">
          <p className="uppercase font-poppins font-[400] text-[#EF6D58] text-[0.3333333em]">
            2nd Feature
          </p>
          <p className="font-poppins font-[800] text-dark text-[0.833333em]">
            consultation feature with verified veterinarians
          </p>
          <p className="font-poppins font-[400] text-[#391400A3] text-[0.33333em]">
            Our app offers a convenient and secure consultation feature with
            verified veterinarians, ensuring that your pet receives expert care
            and guidance whenever needed.
          </p>
        </div>
        <div className="basis-1/2 w-[11.8em] h-[7.6em] flex ">
          <img
            src="Images/veterinary.png"
            alt="schedule"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-row w-[90%] mx-auto justify-center items-center my-20">
        <div className="basis-1/2 w-[11.8em] h-[7.6em] flex ">
          <img
            src="Images/order.png"
            alt="schedule"
            className="w-full object-contain"
          />
        </div>
        <div className="basis-1/2 flex flex-col mx-4">
          <p className="uppercase font-poppins font-[400] text-[#EF6D58] text-[0.3333333em]">
            3rd Feature
          </p>
          <p className="font-poppins font-[800] text-dark text-[0.833333em]">
            book a wide range of services
          </p>
          <p className="font-poppins font-[400] text-[#391400A3] text-[0.33333em]">
            Our platform allows pet owners to easily book a wide range of
            services, including grooming, dental care, pet washing, and other
            healthcare services, all from a variety of trusted and verified
            service providers.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
