import React from "react";

const BenefitSection = () => {
  return (
    <>
      <div className="w-[90%] h-[10em]   flex flex-row justify-center items-start mx-auto">
        <div className="basis-1/2 box-border mx-5 flex flex-col justify-start items-start ">
          <p className="uppercase font-poppins font-[400] text-[#EF6D58] text-[0.3333333em]">
            benefits
          </p>
          <p className="font-poppins capitalize font-[800] text-dark text-[0.833333em]">
            new member benefits
          </p>
          <p className="font-poppins font-[400] text-[#391400A3] text-[0.33333em]">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <span className="font-poppins font-[400] text-dark text-[0.3333em]">
            Read More
          </span>
        </div>

        <div className="basis-1/2 flex flex-col border-box mx-5 justify-end items-start">
          <div className="flex flex-row  justify-center items-center">
            <h1 className="font-poppins font-[800] text-dark mx-5 text-[1.66666em]">
              1
            </h1>
            <p className="font-poppins font-[700] text-dark text-[0.5em]">
              Full service range including
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="font-poppins font-[800] text-dark mx-5 text-[1.66666em]">
              2
            </h1>
            <p className="font-poppins font-[700] text-dark text-[0.5em]">
              Free pet care consultation
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="font-poppins font-[800] text-dark mx-5 text-[1.66666em]">
              3
            </h1>
            <p className="font-poppins font-[700] text-dark text-[0.5em]">
              24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitSection;
