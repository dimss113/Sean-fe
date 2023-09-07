import React from "react";

const Footer = () => {
  return (
    <div className="bg-purp flex flex-col justify-center px-[2.8125em] text-[30px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
      <div className="flex flex-col sm:flex-row mt-[1.666666em] mb-[1.666666em] mx-auto">
        <div className="w-[8.14583333em] h-[4em] rounded-l-[0.166666em] border-[0.02083333em] border-second">
          <div className="flex flex-col">
            <div className="flex ml-[1em] mt-[0.6666666em] gap-[0.33333333em] items-center">
              <div className="flex w-[1.3333333em] h-[1.3333333em]">
                <img
                  src="/Images/phone.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <h1 className="uppercase text-[#EF6D58] font-poppins font-normal leading-[0.6666666em] text-[0.33333333em]">
                Phone
              </h1>
            </div>
            <h1 className="ml-[1em] mt-[1.5em] font-poppins leading-[0.66666666em] font-normal text-[0.4em] text-[#391400]">
              +62 812 3456 7890
            </h1>
          </div>
        </div>
        <div className="w-[8.14583333em] h-[4em] border-[0.02083333em] border-second">
          <div className="flex flex-col">
            <div className="flex ml-[1em] mt-[0.6666666em] gap-[0.33333333em] items-center">
              <div className="flex w-[1.3333333em] h-[1.3333333em]">
                <img
                  src="/Images/messagepng.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <h1 className="uppercase text-[#EF6D58] font-poppins font-normal leading-[0.6666666em] text-[0.33333333em]">
                Email
              </h1>
            </div>
            <h1 className="ml-[1em] mt-[1.5em] font-poppins leading-[0.6666666em] font-normal text-[0.4em] text-[#391400]">
              sean@gmail.com
            </h1>
          </div>
        </div>
        <div className="w-[8.14583333em] h-[4em] rounded-r-lg border-[0.02083333em] border-second">
          <div className="flex flex-col">
            <div className="flex ml-[1em] mt-[0.6666666em] gap-[0.33333333em] items-center">
              <div className="flex w-[1.3333333em] h-[1.3333333em]">
                <img
                  src="/Images/address.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <h1 className="uppercase text-[#EF6D58] font-poppins font-normal leading-[0.6666666em] text-[0.33333333em]">
                Address
              </h1>
            </div>
            <h1 className="ml-[1em] mt-[1.5em] font-poppins leading-[0.6666666em] font-normal text-[0.4em] text-[#391400]">
              Surabaya
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="flex">
    <h1 className="">
      Agency
    </h1>
    <div className="flex flex-col">
      <h1 className="">
        Menu
      </h1>
      <div className="">
        <button className="">

        </button>
      </div>
    </div>
  </div> */}
    </div>
  );
};

export default Footer;
