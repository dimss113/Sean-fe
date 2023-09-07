import React from "react";

const ContactSection = () => {
  return (
    <>
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
              <div className="my-[0.333333333em] p-[0.3333333em] border border-second bg-main w-[7.791666em] h-[1em] rounded-lg flex">
                <input
                  className="w-full font-poppins font-[400] text-white bg-main outline-none text-[0.333333em]"
                  placeholder="Your email"
                />
              </div>

              <div className="my-[0.333333333em] p-[0.3333333em] border border-second bg-main w-[7.791666em] h-[1em] rounded-lg flex">
                <input
                  className="w-full font-poppins font-[400] text-white bg-main outline-none text-[0.333333em]"
                  placeholder="subject"
                />
              </div>

              <div className="my-[0.333333333em] p-[0.3333333em] border border-second bg-main w-[7.791666em] h-[2em] rounded-lg flex">
                <textarea
                  className="w-full font-poppins font-[400] text-white bg-main outline-none text-[0.333333em]"
                  placeholder="Your message"
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
    </>
  );
};

export default ContactSection;
