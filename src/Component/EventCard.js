import React from 'react'

function EventCard({dateDay, dateMonthYear, time, eventName, brief}) {
  return (
    <div className='w-[370px] h-[448px] rounded-[6px] border-[1px] border-[#3A3C56]'>
        <div className='flex flex-col px-10 py-9'>
            <div className='flex gap-3'>
                <h1 className='text-white text-7xl font-extrabold leading-[80px] font-poppins'>
                    {dateDay}
                </h1>
                <h2 className='text-white text-2xl font-bold leading-8 font-poppins max-w-[127px] mt-[5px]'>
                    {dateMonthYear}
                </h2>
            </div>
            <div className='flex gap-2 mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='mt-[7px]'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5 3C7.77614 3 8 3.22386 8 3.5V8.71L11.248 10.566C11.4805 10.7063 11.5586 11.0064 11.4238 11.2422C11.2891 11.478 10.9909 11.5631 10.752 11.434L7.252 9.434C7.09622 9.34502 7.00006 9.1794 7 9V3.5C7 3.22386 7.22386 3 7.5 3Z" fill="#EF6D58"/>
                </svg>
                <h1 className='text-white text-base font-normal leading-8 font-poppins'>
                    {time}
                </h1>
            </div>
            <div className='bg-[#3A3C56] w-[290px] h-[1px] flex-shrink-0 mt-9'></div>
            <div className='mt-10'>
                <h1 className='text-white font-poppins text-2xl text-bold leading-8'>
                    {eventName}
                </h1>
                <h1 className='mt-[19px] text-base font-normal leading-8 first-letter text-lightGray'>
                    {brief}
                </h1>
                <button className='mt-[26px] font-poppins text-base font-normal leading-8 text-white hover:brightness-75'>
                    Explore Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default EventCard