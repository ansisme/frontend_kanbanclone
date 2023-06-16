import React from 'react';
import Line from './Line';
import calender from '../assets/images/calendar.png'
import messageQuestion from '../assets/images/messageQuestion.png';
import notification from '../assets/images/notification.png';
import profilepic from '../assets/images/profilepic.png';
import arrowDown from '../assets/images/arrowDown.png';
import logo from '../assets/images/logo.png';
import dragInward from '../assets/images/dragInward.png';

const NavBar = () => {
  return (
    <>
      <div>
        <Line />
      </div>
      <div className="flex  pt-[22px] pb-[22px]">
        
        <img src={logo} alt="logo" className='w-[18px] h-[18px] mt-[10.5px] mr-[10px] ml-[10px]'/>
        <p className="text-[20px] font-semibold mt-[5px]">Project M.</p>
        <img src={dragInward} alt="drag-inward" className='w-[26px] h-[20px] ml-[60px] mt-[10.5px]'/>
        <div className="ml-[299px]">
          <form className="form">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative ml-[-180px] mr-[100px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-100 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                {/* <img src={search} alt="" className='w-5 h-5 text-lightGrey '/>
                <img src={Vector} alt="" className='w-[1.83px] h-[1.83px] text-lightGrey '/> */}
              </div>
              <input
                type="search"
                id="default-search"
                className="block pl-10 w-[417px] h-[44px] text-sm text-lightGrey rounded-lg bg-standardBg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for anything..."
                
              />
            </div>
          </form>
          
        </div>
        <div className='flex pt-[13.5px] ml-[258px]'>
            <img src={calender} alt='calender' className='w-[18px] h-[18.5px] mr-[20.5px]'/>
            <img src={messageQuestion} alt='message question' className='w-[18px] h-[18.5px] mr-[20.5px]'/>
            <img src={notification} alt='notification' className='w-[18px] h-[18.5px] mr-16'/>

        </div>
        <div className='flex flex-col'>
            <p className=''>Anima Agarwal</p>
            <p className='text-lightGrey text-right'>UP, India</p>
            <img src={profilepic} alt="profilepic" className='w-[40px] rounded-full h-[41px] absolute ml-[138px]' />
            <img src={arrowDown} alt="arrowDown" className='w-[18px] h-[18px] absolute ml-[198px] top-[34px]' />
        </div>

      </div>
      
    </>
  );
};

export default NavBar;
