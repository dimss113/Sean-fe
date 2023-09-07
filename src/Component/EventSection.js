import React from 'react'
import EventCard from './EventCard'

function EventSection() {
  return (
    <div className="flex flex-col bg-main justify-center items-center text-[18px] sm:text-[24px] md:text-[30px] lg:text-[48px]">
      <h1 className="text-[0.333333em] font-normal leading-[0.75em] text-red mt-[1.916666em]">
        Events
      </h1>
      <h1 className="text-center font-poppins text-[1.1666666em] font-semibold leading-[1.3333333em] text-white mt-[0.41666666em] max-w-[9.33333em]">
        Explore Future Conferences
      </h1>
      <div className="flex flex-col sm:flex-row mt-16 gap-[0.625em] justify-center items-center text-[24px] md:text-[30px] lg:text-[48px]">
        <EventCard
          dateDay="3"
          dateMonthYear="November 2023"
          time="09.00 - 12.00"
          eventName="Cat Training Academy"
          brief="Cat education and training academy for cat lovers!"
        />
        <EventCard
          dateDay="2"
          dateMonthYear="Desember 2023"
          time="10.00 - 12.00"
          eventName="Dog Training Academy"
          brief="Dog education and training for dog lovers!"
        />
        <EventCard
          dateDay="10"
          dateMonthYear="Desember 2023"
          time="09.00 - 17.00"
          eventName="Community Meeting"
          brief="A place for pet owners to meet and share!"
        />
      </div>
      <button className="mt-16 rounded-[0.125em] border-lightGray border-[0.020833em] px-[0.625em] py-[0.4541666em] font-poppins text-center text-sm font-extrabold uppercase leading-normal text-white hover:brightness-75">
        Explore More
      </button>
    </div>
  );
}

export default EventSection