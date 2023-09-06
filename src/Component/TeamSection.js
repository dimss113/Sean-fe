import React from 'react'

function TeamSection() {
  return (
    <div className='flex flex-col px-[135px] w-full bg-main pt-[140px] '>
        <h1 className='text-[#EF6D58] leading-8 font-poppins font-normal text-base uppercase'>
            Our Team
        </h1>
        <h1 className='text-white mt-5 font-poppins text-[56px] leading-[64px] font-extrabold max-w-xl'>
        Team of Designers and Developers
        </h1>
        <div className='flex pt-16 gap-[30px] justify-center'>
            <div className='flex flex-col'>
                <div className='border-[1px] border-[#3A3C56] rounded-[6px] w-[270px] h-[272px]'>
                    <img src='/images/user (2).png' alt='' />
                </div>
                <h1 className='text-white font-poppins font-bold leading-8 text-2xl mt-[26px]'>
                    Rule Lulu Damara
                </h1>
                <h2 className='text-lightGray font-poppins font-normal text-base leading-8 mt-[3px]'>
                    CEO
                </h2>
            </div>
            <div className='flex flex-col'>
                <div className='border-[1px] border-[#3A3C56] rounded-[6px] w-[270px] h-[272px]'>
                    <img src='/images/user (2).png' alt='' />
                </div>
                <h1 className='text-white font-poppins font-bold leading-8 text-2xl mt-[26px]'>
                    Muhammad Raffi Tri R
                </h1>
                <h2 className='text-lightGray font-poppins font-normal text-base leading-8 mt-[3px]'>
                    CMO
                </h2>
            </div>
            <div className='flex flex-col'>
                <div className='border-[1px] border-[#3A3C56] rounded-[6px] w-[270px] h-[272px]'>
                    <img src='/images/user (2).png' alt='' />
                </div>
                <h1 className='text-white font-poppins font-bold leading-8 text-2xl mt-[26px]'>
                    Dimas Fadilah Akbar
                </h1>
                <h2 className='text-lightGray font-poppins font-normal text-base leading-8 mt-[3px]'>
                    CTO
                </h2>
            </div>
        </div>
    </div>
  )
}

export default TeamSection