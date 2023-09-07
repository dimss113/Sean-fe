import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className="w-[90%] mx-auto my-4 text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="basis-1/2 flex flex-col relative ">
            <img
              src="Images/Star.png"
              alt="star"
              className="absolute -z-1 right-3"
            />
            <p className="font-poppins font-[400] text-[0.3333em] text-[#EF6D58] leading-8 ">
              SAHABAT HEWAN
            </p>
            <h1 className="font-poppins font-[800] text-white z-10 text-[1.4791666em]">
              Welcome to Sean, Sahabat Hewan Anda
            </h1>
            <p className="font-poppins font-[400] text-[#A9A9A9] text-[0.33333em]">
              Sean menyediakan berbagai layanan baik berupa konsultasi,
              penjadwalan perawatan hewan, pemesanan tempat grooming, hingga
              pemesanan makanan hewan.
            </p>

            <div className="flex flex-col my-[0.666666666666em]">
              <div className="cursor-pointer flex bg-[#EF6D58] w-[3.208333em] h-[1em] rounded-[0.1666666666em] justify-center items-center">
                <p className="font-poppins font-[900] text-white text-[0.2916666em] uppercase ">
                  how we work
                </p>
              </div>
            </div>
          </div>

          <div className="flex basis-1/2  h-[10em] my-20 sm:my-0">
            <div className="relative  w-full h-full">
              <div className="w-[5.125em] h-[6em] absolute  -top-5 left-10 bg-[#B550F8] rounded-tr-full rounded-tl-full">
                <img
                  src="Images/cat.png"
                  alt="group"
                  className="w-full h-full"
                />
              </div>

              <div className="w-[5.125em] h-[6em] absolute bottom-0 -right-8 bg-[#F7CC47] rounded-tr-full rounded-tl-full">
                <img
                  src="Images/dog.png"
                  alt="group"
                  className="w-full h-full"
                />
              </div>

              <div className="absolute bottom-8 left-12 w-[4.4583333em] h-[2.3333333em]">
                <img
                  src="Images/block.png"
                  alt="group"
                  className="w-full h-full"
                />
              </div>

              <div className="absolute top-8 right-8 w-[2.9583333em] h-[1.520833333em]">
                <img
                  src="Images/curl.png"
                  alt="group"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
