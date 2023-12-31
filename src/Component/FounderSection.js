import React from 'react'

function FounderSection() {
  return (
    <div className="relative bg-main text-[24px] md:text-[30px] lg:text-[48px]">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="80"
        viewBox="0 0 100 80"
        fill="none"
        className="absolute ml-[25em] mt-[5.416666666em]"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.9664 45C44.9964 45.15 45.9507 58.3 36.5177 68.54C29.508 76.145 18.9009 80 4.99627 80H0V65.9L4.012 65.1C10.9118 63.72 15.6933 60.985 18.2314 56.98C19.5312 54.8753 20.2692 52.4719 20.3748 50H4.99627C2.23691 50 0 47.7614 0 45V10C0 4.485 4.48165 0 9.99253 0H39.9701C42.7295 0 44.9664 2.23858 44.9664 5V45ZM99.9603 45C99.9903 45.15 100.94 58.3 91.5116 68.54C84.5019 76.145 73.8948 80 59.9902 80H54.9939V65.9L59.0059 65.1C65.9058 63.72 70.6872 60.985 73.2253 56.98C74.5251 54.8753 75.2631 52.4719 75.3687 50H59.9902C57.2308 50 54.9939 47.7614 54.9939 45V10C54.9939 4.485 59.4756 0 64.9865 0H94.9641C97.7234 0 99.9603 2.23858 99.9603 5V45Z"
          fill="#494A69"
        />
      </svg> */}
      <div className="pt-[3.75em] flex flex-col sm:flex-row gap-[2.7083333em] justify-center items-center pb-[3.75em]">
        <div className="w-[10.416666666em]  border-[0.0208333333em] rounded-[0.41666666em] border-[#3A3C56]">
          <img src="/Images/user (2).png" alt="" />
        </div>
        <div className="flex flex-col mx-20 sm:mx-0">
          <h1 className="uppercase text-[#EF6D58] font-normal leading-[1.66666em] text-[0.33333333em] font-poppins">
            Founder Words
          </h1>
          <h1 className="text-white text-[0.833333em] leading-[1em] font-extrabold font-poppins max-w-lg mt-[0.6875em] z-10">
            Hewan juga merupakan makhluk hidup yang perlu diperhatikan
            kondisinya.
          </h1>
          <h2 className="text-white text-[0.41666666em] leading-[1.6666666em] font-normal font-poppins mt-[0.91666666em]">
            Jeong Jeong
          </h2>
          <h3 className="text-lightGray text-[0.2916666em] leading-[0.5em] font-normal font-poppins">
            Founder
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FounderSection