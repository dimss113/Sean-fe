import React from 'react'
import EventCard from './EventCard'

function EventSection() {
  return (
    <div className='flex flex-col bg-main justify-center items-center'>
        <h1 className='text-base font-normal leading-9 text-red mt-[92px]'>
            Events
        </h1>
        <h1 className='text-center font-poppins text-[56px] font-semibold leading-[64px] text-white mt-[20px] max-w-md'>
        Explore Future Conferences
        </h1>
        <div className='flex mt-16 gap-[30px] justify-center items-center'>
            <EventCard dateDay="3" dateMonthYear="November 2023" time="09.00 - 12.00" eventName="Cat Training Academy" brief="Cat education and training academy for cat lovers!"/>
            <EventCard dateDay="2" dateMonthYear="Desember 2023" time="10.00 - 12.00" eventName="Dog Training Academy" brief="Dog education and training for dog lovers!"/>
            <EventCard dateDay="10" dateMonthYear="Desember 2023" time="09.00 - 17.00" eventName="Community Meeting" brief="A place for pet owners to meet and share!"/>
        </div>
        <button className='mt-16 rounded-[6px] border-lightGray border-[1px] px-[30px] py-[17px] font-poppins text-center text-sm font-extrabold uppercase leading-normal text-white hover:brightness-75'>
            Explore More
        </button>
    </div>
  )
}

export default EventSection