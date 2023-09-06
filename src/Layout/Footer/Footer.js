import React from "react";

const Footer = () => {
  return <div className="bg-purp flex flex-col justify-center px-[135px]">
    <div className="flex mt-[80px] mb-[80px]">
      <div className="w-[391px] h-[192px] rounded-l-lg border-[1px] border-second">
        <div className="flex flex-col">
          <div className="flex ml-[48px] mt-[32px] gap-4 items-center">
            <img src="/Images/phone.png" alt="" />
            <h1 className="uppercase text-[#EF6D58] font-poppins font-normal leading-8 text-base">
              Phone
            </h1>
          </div>
          <h1 className="ml-[48px] mt-[26px] font-poppins leading-8 font-normal text-xl text-[#391400]">
            +1 567-89-00
          </h1>
        </div>
      </div>
      <div className="w-[391px] h-[192px] border-[1px] border-second">
        <div className="flex flex-col">
            <div className="flex ml-[48px] mt-[32px] gap-4 items-center">
              <img src="/Images/messagepng.png" alt="" />
              <h1 className="uppercase text-[#EF6D58] font-poppins font-normal leading-8 text-base">
                Email
              </h1>
            </div>
            <h1 className="ml-[48px] mt-[26px] font-poppins leading-8 font-normal text-xl text-[#391400]">
              info@agency.com
            </h1>
          </div>
      </div>
      <div className="w-[391px] h-[192px] rounded-r-lg border-[1px] border-second">
        <div className="flex flex-col">
            <div className="flex ml-[48px] mt-[32px] gap-4 items-center">
              <img src="/Images/address.png" alt="" />
              <h1 className="uppercase text-[#EF6D58] font-poppins font-normal leading-8 text-base">
                Address
              </h1>
            </div>
            <h1 className="ml-[48px] mt-[26px] font-poppins leading-8 font-normal text-xl text-[#391400]">
              2247 Lunetta Street, TX 76301
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
  </div>;
};

export default Footer;
