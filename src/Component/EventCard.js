import React from 'react'

function EventCard({dateDay, dateMonthYear, time, eventName, brief}) {
  return (
    <div className="w-[7.7083333em] h-[9.3333em] rounded-[0.125em] border-[0.02084em] border-[#3A3C56] ">
      <div className="flex flex-col px-[0.833333em] py-[0.75em]">
        <div className="flex gap-[0.25em]">
          <h1 className="text-white text-[1.5em] font-extrabold leading-[1.66666em] font-poppins">
            {dateDay}
          </h1>
          <h2 className="text-white text-[0.5em] font-bold leading-[1.66666em] font-poppins max-w-[2.6458333em] mt-[0.10417em]">
            {dateMonthYear}
          </h2>
        </div>
        <div className="flex gap-[0.16666em] mt-[0.16666666em]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-[0.1459em]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5 3C7.77614 3 8 3.22386 8 3.5V8.71L11.248 10.566C11.4805 10.7063 11.5586 11.0064 11.4238 11.2422C11.2891 11.478 10.9909 11.5631 10.752 11.434L7.252 9.434C7.09622 9.34502 7.00006 9.1794 7 9V3.5C7 3.22386 7.22386 3 7.5 3Z"
              fill="#EF6D58"
            />
          </svg>
          <h1 className="text-white text-[0.3333em] font-normal leading-[0.66666em] font-poppins">
            {time}
          </h1>
        </div>
        <div className="bg-[#3A3C56] w-[6.041666em] h-[0.02083333em] flex-shrink-0 mt-[0.75em]"></div>
        <div className="mt-[0.83333333em]">
          <h1 className="text-white font-poppins text-[0.5em] text-bold leading-[0.6666em]">
            {eventName}
          </h1>
          <h1 className="mt-[0.39583333em] text-[0.333333em] font-normal leading-[1.66666666em] first-letter text-lightGray">
            {brief}
          </h1>
          <button className="mt-[0.54166666em] font-poppins text-[0.33333em] font-normal leading-[0.66666666em] text-white hover:brightness-75">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard