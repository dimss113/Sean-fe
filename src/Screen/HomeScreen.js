import React from "react";
import Layout from "../Layout/Layout";
import EventSection from "../Component/EventSection";
import TeamSection from "../Component/TeamSection";
import FounderSection from "../Component/FounderSection";

const HomeScreen = () => {
  return (
    <>
      <Layout>
        {/* bagian 1 */}
        <div className="w-[90%] mx-auto my-4 text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
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

            <div className="flex basis-1/2  h-[10em] my-10 sm:my-0">
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
        <div className="w-full bg-purp text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
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
          <div className="w-[90%] flex flex-row mx-auto text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
            <div className="basis-1/2 relative w-[11.791666em] h-[12.2083333em] ">
              <div className="absolute right-[1.6666666em] top-0 w-[9.79166666em] h-[6.645833333em]">
                <img
                  src="Images/vet.jpg"
                  alt="group"
                  className="w-full object-contain"
                />
              </div>

              <div className="absolute left-[3.3333em] bottom-[2.5em] w-[4.5525em] h-[4.5525em]">
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
              <h1 className="font-[700] my-2 font-poppins text-black text-[1.166666em]">
                Pet Care Agency
              </h1>
              <p className="font-poppins my-2 font-[400] text-[0.416666em] text-[#391400]">
                Provides a full service range
              </p>
              <p className="font-poppins my-2 font-[400] text-[#391400A3] text-[0.33333em]">
                Our vision is to create an ecosystem that makes pet care more
                accessible, affordable, and efficient. We dream of a future
                where every pet receives the best care without sacrificing the
                convenience or finances of their owners. We aim to eliminate
                barriers to access to veterinary services so that every animal
                can live a healthy, happy, and comfortable life.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
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

          <div className="w-[90%] h-[1px] border border-second mt-10 mb-20 mx-auto"></div>

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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                verified veterinarians, ensuring that your pet receives expert
                care and guidance whenever needed.
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
                services, including grooming, dental care, pet washing, and
                other healthcare services, all from a variety of trusted and
                verified service providers.
              </p>
            </div>
          </div>

          <div className="w-full bg-purp text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
            <div className="w-[90%] flex flex-row justify-between items-center mx-auto my-20">
              <div className="basis-1/2 flex justify-start items-center">
                <p className="basis-1/2 font-poppins font-[800] text-dark text-[0.833333em] capitalize">
                  newsletter
                </p>
              </div>
              <div className="basis-1/2 flex flex-row justify-end items-center">
                <div className="flex flex-row w-[7.70833333em] h-[1em] justify-start items-center p-2 bg-main rounded-lg mx-4">
                  <input
                    className="w-[80%] outline-none font-poppins font-[400] text-whitek text-[0.333333em] bg-main"
                    placeholder="Your email"
                  />
                </div>
                <div className="w-[3.54166em] h-[1em] rounded-lg flex justify-center items-center bg-main">
                  <p className="font-poppins font-[900] text-white text-[0.2916666em]">
                    subscribe
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[90%] mx-auto mb-20">
              <div className="w-full  flex flex-col sm:flex-row justify-center items-center sm:items-stretch sm:justify-between ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6991069286896!2d112.78854147394688!3d-7.275038592732042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1767eedb95%3A0xd22550bc6391c2b2!2sJl.%20Wisma%20Permai%20II%20O%20No.21%2C%20RT.005%2FRW.06%2C%20Mulyorejo%2C%20Kec.%20Mulyorejo%2C%20Surabaya%2C%20Jawa%20Timur%2060115!5e0!3m2!1sen!2sid!4v1694029939994!5m2!1sen!2sid"
                  className="basis-1/2"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="w-[9.791666em] h-[9.66666666me]  bg-main rounded-lg flex flex-col py-10 px-5 justify-center items-center text-[30px] sm:text-[24px] md:text-[30px] lg:text-[48px] my-10 sm:my-0">
                  <p className="my-4 font-poppins font-[700] text-second text-[0.5em]">
                    Get In Touch
                  </p>
                  <div className="my-4 p-4 border border-second bg-main w-[7.791666em] h-[1em] rounded-lg flex">
                    <input
                      className="w-full font-poppins font-[400] text-white bg-main outline-none text-[0.333333em]"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="my-4 p-4 border border-second bg-main w-[7.791666em] h-[1em] rounded-lg flex">
                    <input
                      className="w-full font-poppins font-[400] text-white bg-main outline-none text-[0.333333em]"
                      placeholder="subject"
                    />
                  </div>

                  <div className="my-4 p-4 border border-second bg-main w-[7.791666em] h-[2em] rounded-lg flex">
                    <textarea
                      className="w-full font-poppins font-[400] text-white bg-main outline-none text-[0.333333em]"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="w-[3.2083333em] h-[1em] bg-second flex justify-center items-center rounded-lg">
                    <p className="font-poppins font-[800] text-white text-[0.3333em] uppercase">
                      submit now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EventSection />
          <TeamSection />
          <FounderSection />
        </div>
      </Layout>
    </>
  );
};

export default HomeScreen;
