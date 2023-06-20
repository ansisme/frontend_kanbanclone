import React from 'react';
import './sidebar.css';
import { Icon } from '@iconify/react';
import Hero from './Hero'
const SideBar = () => {
  return (
    <>
    <div className='flex justify-start h-screen '>
    <div className='flex flex-col overflow-y-scroll h-screen 3xl:mt-[33px] 2xl:mt-[25px] xl:mt-[15px] lg:mt-[0] md:mt-[0] sm:mt-[0] text-lightGrey font-medium sm:ml-[10px] md:ml-[10px] lg:ml-[10px] xl:ml-[15px] 2xl:ml-[20px] 3xl:ml-[22px] mr-[48.5px]'>        
    <div className='flex items-center pb-[20px]'>
          <Icon icon="uiw:appstore-o" className='mr-2 h-[20px] w-[20px]'/>
          <p className='ml-2 text-[16px] '>Home</p>
        </div>
        <div className='flex items-center pb-[20px]'>
        <Icon icon="system-uicons:message-writing" alt="message" className='h-[20px] w-[20px] mr-2 ' />
          <p className='ml-2 text-[16px] '>Messages</p>
        </div>
        <div className='flex items-center pb-[20px]'>
          <Icon icon="fluent:tasks-app-24-regular" className='h-[20px] w-[20px] mr-2 ' />
          <p className='ml-2 text-[16px] '>Tasks</p>
        </div>
        <div className='flex items-center pb-[20px]'>
        <Icon icon="solar:users-group-rounded-linear"  className='h-[20px] w-[20px] mr-2 ' />
          <p className='ml-2 text-[16px] '>Members</p>
        </div>
        <div className='flex items-center pb-[20px]'>
        <Icon icon="ion:settings-outline" className='h-[20px] w-[20px] mr-2 ' />
          <p className='ml-2 text-[16px] '>Settings</p>
        </div>
     
  <div className='flex flex-col mt-[16px] mb-[30px]'>
  <hr className='text-standardBg mb-[30.5px] ml-[-9px] mr-0 h-0 bg-standardBg w-[224px] border-[1px] border-solid'></hr>
  <div className='text-lightGrey'>
    <p className='font-bold text-[12px] sm:ml-[8px] mb-[21px]'>MY PROJECTS</p>
    <div className='ml-[-8px] font-medium text-[16px]'>
    <div className='flex items-center font-semibold bg-standardBg rounded-lg w-[225px] h-[39px] mb-[20px]'>
      <span className='h-[8px] w-[8px] rounded-full bg-mobile ml-[12px] mr-2'></span>
      <p className='ml-[16px] mb-[0px] text-[#000000]'>Mobile App</p>
      <p className='text-[16px] mt-[-6px] text-[#0D062D] ml-[65px] mr-[14px]'>...</p>
    </div>
    <div className='flex items-center mb-[30px]'>
      <span className='h-[8px] w-[8px] rounded-full bg-websiteRedesign ml-[12px] mr-2'></span>
      <p className='ml-4 '>Website Redesign</p>
    </div>
    <div className='flex items-center mb-[30px]'>
      <span className='h-[8px] w-[8px] rounded-full bg-designSystem ml-[12px] mr-2'></span>
      <p className='ml-4 '>Design System</p>
    </div>
    <div className='flex items-center mb-[px]'>
      <span className='h-[8px] w-[8px] rounded-full bg-wireframes ml-[12px] mr-2'></span>
      <p className='ml-4'>Wireframes</p>
    </div>
    </div>
  </div>
</div>
<div className='flex flex-col'>
  <div className='flex justify-center relative'>
    <div className='flex bg-standardBg w-[66px] h-[66px] rounded-full z-10'>
      <div className='rounded-full w-[33px] m-[16px] h-[33px] shadow-blur-17 opacity-70 backdrop-blur-17 z-1'></div>
      <div className='w-[17px] h-[17px] text-midYellow absolute z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div> <Icon icon="ic:baseline-lightbulb" alt="bulb" /></div>
       
      </div>
    </div>
  </div>


<div className='h-[200px] w-[206px] bg-standardBg flex flex-col items-center justify-center rounded-3xl ml-[2px] mt-[-30px]'>
    <p className='text-black font-medium text-[14px] mt-[37px]'>Thoughts Time</p>
    <p className='ml-[20px] mr-[20px] text-lightGrey mt-[4px] text-[12px] font-normal text-center '>
    We don't have any notice for you, till then you can share your thoughts with your peers.
    </p>
    <div className='mb-[20px]'>
    <div className=' ml-[20px] mr-[20px] w-[166px]  h-[40px] flex items-center  justify-center rounded-md mt-[14px] bg-white text-black font-medium text-[14px]'>
    <div className=''>
    <button type='submit' className='text-center'>Write a message</button>
    </div>
    </div>
   
    </div>
</div>
 </div>
</div>
<div>
  <Hero/>
</div>
</div>
</>
  );
};

export default SideBar;
