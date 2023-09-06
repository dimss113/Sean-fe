import React from "react";
import Layout from "../Layout/Layout";

const HomeScreen = () => {
  return (
    <>
      <Layout>
        {/* bagian 1 */}
        <div className="w-[90%] mx-auto my-4 text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
          <div className="flex flex-row justify-between items-center">
            <div className="basis-1/2 flex flex-col relative ">
              <img
                src="Images/Star.png"
                alt="star"
                className="absolute z-0 right-3"
              />
              <p className="font-poppins font-[400] text-[0.3333em] text-[#EF6D58] leading-8 ">
                SAHABAT HEWAN
              </p>
              <h1 className="font-poppins font-[800] text-white z-10 text-[1.4791666em]">
                We’re Help To Build Your Dream Project
              </h1>
              <p className="font-poppins font-[400] text-[#A9A9A9] text-[0.33333em]">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>

              <div className="flex flex-col my-8">
                <div className="cursor-pointer flex bg-[#EF6D58] w-[3.208333em] h-[1em] rounded-lg justify-center items-center">
                  <p className="font-poppins font-[900] text-white text-[0.2916666em] uppercase ">
                    how we work
                  </p>
                </div>
              </div>
            </div>

            <div className="flex basis-1/2  h-[10em]">
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

        {/* bagian 2 */}
        <div className="min-h-screen bg-purp text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
          {/* bagian 2 --1 */}
          <div className="w-[90%]  box-border p-10 flex flex-row mx-auto justify-between items-center mt-20">
            <div className="w-[3.0625em] h-[0.875em] mx-4">
              <img
                src="Images/sean2.png"
                alt="line"
                className="w-full object-contain"
              />
            </div>
            <div className="w-[3.0625em] h-[0.875em] mx-4">
              <img
                src="Images/sean2.png"
                alt="line"
                className="w-full object-contain"
              />
            </div>
            <div className="w-[3.0625em] h-[0.875em] mx-4">
              <img
                src="Images/sean2.png"
                alt="line"
                className="w-full object-contain"
              />
            </div>
            <div className="w-[3.0625em] h-[0.875em] mx-4">
              <img
                src="Images/sean2.png"
                alt="line"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="w-[90%] h-[1px] border border-second mt-10 mb-20 mx-auto"></div>

          {/* bagian 2 -- 2 */}
          <div className="w-[90%] flex flex-row mx-auto">
            <div className="relative w-[11.791666em] h-[12.2083333em] ">
              <div className="absolute right-0 top-0 w-[9.79166666em] h-[6.645833333em]">
                <img
                  src="Images/vet.jpg"
                  alt="group"
                  className="w-full object-contain"
                />
              </div>

              <div className="absolute left-0 bottom-[2.5em] w-[4.5525em] h-[4.5525em]">
                <img
                  src="Images/sean-logo.png"
                  alt="sean-logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="basis-1/2 px-10  flex flex-col justify-start items-start">
              <p className="font-poppins my-2 font-[400] leading-8 uppercase text-[#EF6D58] text-[0.33333em]">
                about
              </p>
              <h1 className="font-[800] my-2 font-poppins text-black text-[1.166666em]">
                An Experience Design Agency
              </h1>
              <p className="font-poppins my-2 font-[400] text-[0.416666em] text-[#391400]">
                Provides a full service range
              </p>
              <p className="font-poppins my-2 font-[400] text-[#391400A3] text-[0.33333em]">
                Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team.
              </p>

              <div className="group cursor-pointer hover:scale-110 transition-all duration-150 w-[2.875em] bg-second h-[1em] flex justify-center items-center">
                <p className="group-hover:scale-110 transition-all duration-150 font-poppins font-[900] text-black text-[0.29166666em]">
                  ABOUT US
                </p>
              </div>
            </div>
          </div>

          {/* bagian 2 -- 3 */}
          <div className="my-20 flex flex-row w-[90%] mx-auto">
            <div className="basis-1/3 border border-second p-4 rounded-l-xl">
              <h1 className="font-poppins font-[800] text-dark text-[0.83333em]">
                8
              </h1>
              <p className="font-poppins font-[400] text-dark text-[0.41666em]">
                Great Features
              </p>
            </div>
            <div className="basis-1/3 border border-second p-4">
              <h1 className="font-poppins font-[800] text-dark text-[0.83333em]">
                0
              </h1>
              <p className="font-poppins font-[400] text-dark text-[0.41666em]">
                End Users
              </p>
            </div>
            <div className="basis-1/3 border border-second p-4 rounded-r-xl">
              <h1 className="font-poppins font-[800] text-dark text-[0.83333em]">
                0
              </h1>
              <p className="font-poppins font-[400] text-dark text-[0.41666em]">
                Pet Care Partner
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomeScreen;
