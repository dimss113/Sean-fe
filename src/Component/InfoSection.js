import React from "react";

const InfoSection = () => {
  return (
    <>
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
    </>
  );
};

export default InfoSection;
