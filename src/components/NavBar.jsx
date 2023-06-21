import React from 'react';
import Line from './Line';
import calender from '../assets/images/NavBar/calendar.png';
import messageQuestion from '../assets/images/NavBar/messageQuestion.png';
import notification from '../assets/images/NavBar/notification.png';
import profilepic from '../assets/images/NavBar/profilepic.png';
import arrowDown from '../assets/images/NavBar/arrowDown.png';
import logo from '../assets/images/NavBar/logo.png';
import dragInward from '../assets/images/NavBar/dragInward.png';
import { Icon } from '@iconify/react';

const NavBar = () => {
  return (
    <>
      <div>
        <Line />
      </div>
      <div className="flex pt-[22px] pb-[22px] sm:flex-col ">
      <div className='flex'>
      <img src={logo} alt="logo" className="w-[18px] h-[18px] mt-[10.5px] mr-[9px] ml-[24px] sm:mt-[10px] sm:mr-2" />
        <p className="text-[20px] font-semibold mt-[5px] sm:mt-1 sm:mr-0">Project M.</p>
        <img src={dragInward} alt="drag-inward" className="w-[26px] h-[20px] sm:hidden md:hidden lg:ml-[10px] ml-[52px] mt-[10.5px]" />
      </div>
       
        <div className="ml-[120px]">
          <form className="form">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative mr-[100px] lg:mr-[10px] sm:ml-[-100px] lg:ml-[-80px]  sm:mt-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon icon="ri:search-2-line" className="text-lightGrey w-[17.42px] h-[17.42px] sm:mb-[20px] md:mb-[20px]" />
              </div>
              <input
                type="search"
                id="default-search"
                className=" pl-10 w-[417px] h-[44px] sm:w-full md:w-[200px] lg:w-[320px] sm:mb-[20px] md:mb-[20px] sm:h-[40px] text-[14px] text-lightGrey rounded-lg bg-standardBg"                
                placeholder="Search for anything..."
              />

            </div>
          </form>
        </div>
        <div className='flex md:flex-col sm:ml-[24px]'>
        <div className="flex mt-[13.5px] ml-[208px] sm:ml-[24px] md:ml-[24px] lg:ml-[0px] mr-[50px] md:mb-[10px]">
          <img src={calender} alt="calender" className="w-[18px] h-[18.5px] mr-[29px] lg:mr-[15px]" />
          <img src={messageQuestion} alt="message question" className="w-[20px] h-[19.13px] mr-[29px] lg:mr-[15px]" />
          <img src={notification} alt="notification" className="w-[16px] h-[16.87px]" />
        </div>
        <div className="flex ">
          <div className="flex flex-col sm:mr-[80px]">
            <p className="text-[16px] sm:text-[16px]">Anima Agarwal</p>
            <p className="text-[16px] text-lightGrey sm:text-[14px]">U.P, India</p>
          </div>
          <img src={profilepic} alt="profilepic" className="w-[40px] rounded-full h-[41px] ml-[18px] lg:ml-[10px] sm:mr-[20px]" />
          <img src={arrowDown} alt="arrowDown" className="w-[18px] h-[18px] mt-[14px] ml-[14px] lg:ml-[8px] " />
        </div>
        </div>
       
      </div>
    </>
  );
};

export default NavBar;
