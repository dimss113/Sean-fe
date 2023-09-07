import React from 'react'

function TeamSection() {
  return (
    <div className="flex flex-col px-[2.8125em] w-full bg-main pt-[2.916666em] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
      <h1 className="text-[#EF6D58] leading-8 font-poppins font-normal text-base uppercase text-center sm:text-left">
        Our Team
      </h1>
      <h1 className="text-white mt-5 font-poppins text-[1.16666em] leading-[1.33333em] font-extrabold max-w-xl text-center sm:text-left">
        Team of Designers and Developers
      </h1>
      <div className="flex flex-col sm:flex-row pt-16 gap-[0.625em] justify-center text-[34px] md:text-[30px] lg:text-[48px] mx-auto sm:mx-0">
        <div className="flex flex-col">
          <div className="border-[1px] border-[#3A3C56] rounded-[0.125em] w-[5.625em] h-[5.666666666em]">
            <img src="/Images/user (2).png" alt="" />
          </div>
          <h1 className="text-white font-poppins font-bold leading-8 text-[0.5em] mt-[0.541666em]">
            Rule Lulu Damara
          </h1>
          <h2 className="text-lightGray font-poppins font-normal text-[0.33333333em] leading-8 mt-[0.0625em]">
            CEO
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="border-[0.0208333em] border-[#3A3C56] rounded-[0.125em] w-[5.625em] h-[5.66666666em]">
            <img src="/Images/user (2).png" alt="" />
          </div>
          <h1 className="text-white font-poppins font-bold leading-8 text-[0.5em] mt-[0.5416666666em]">
            Muhammad Raffi Tri R
          </h1>
          <h2 className="text-lightGray font-poppins font-normal text-[0.3333333em] leading-8 mt-[0.0625em]">
            CMO
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="border-[0.02083333em] border-[#3A3C56] rounded-[0.125em] w-[5.625em] h-[5.6666666em]">
            <img src="/Images/user (2).png" alt="" />
          </div>
          <h1 className="text-white font-poppins font-bold leading-8 text-[0.5em] mt-[0.5416666em]">
            Dimas Fadilah Akbar
          </h1>
          <h2 className="text-lightGray font-poppins font-normal text-[0.33333em] leading-8 mt-[0.0625em]">
            CTO
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TeamSection