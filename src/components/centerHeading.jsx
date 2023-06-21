import React from 'react'
import { Icon } from '@iconify/react';
import user1 from '../assets/images/centerHeading/user1.png';
import user2 from '../assets/images/centerHeading/user2.png';
import user3 from '../assets/images/centerHeading/user3.png';
import user4 from '../assets/images/centerHeading/user4.png';
import user5 from '../assets/images/centerHeading/user5.png';

const CenterHeading = () => {
  return (
    <div className='flex flex-col text-lightGrey sm:ml-[-78px]'>
    <div className='flex sm:flex-col'>
        <div className='mt-[41px] font-bold text-[46px] text-blueBlack sm:text-[30px]'><p>Mobile App</p></div>
        <div className=' bg-opacity-20 bg-blueLine absolute h-[25px] rounded-lg w-[25px] flex-center justify-center mt-[59.5px] ml-[323px] sm:ml-[200px] sm:mt-[50px] '>
        <Icon icon="fluent:edit-20-regular" className='text-blueLine font-extrabold m-[4.75px]' />
        </div>
        <div className=' bg-opacity-20 bg-blueLine absolute h-[25px] rounded-lg w-[25px] flex-center justify-center mt-[59.5px] ml-[365px] sm:ml-[240px] sm:mt-[50px]'>
        <Icon icon="material-symbols:link" className='text-blueLine font-extrabold m-[4.8px] mr-[1px] ' />
        </div>
        <div className='sm:mb-[20px]'>
        <div className=' flex bg-opacity-20 bg-blueLine absolute h-[15px] rounded-md w-[15px] flex-center justify-center mt-[59.5px] ml-[604px] sm:mt-[26px] sm:ml-0'>
        <p className='text-blueLine text-center mt-[-5px] ml-[-1px] '>+</p>
        </div>
        <div className='mt-[55px] font-medium text-[16px] ml-[628.5px] sm:ml-[24px] sm:mt-[22px]'><p className='text-blueLine'>Invite</p></div>
        <div className='mt-[-30px] '>
            <img src={user1} alt="user1" className='z-0 ml-[682px] absolute sm:ml-[82px]'/>
            <img src={user2} alt="user2" className='z-1 ml-[712px] absolute sm:ml-[112px]'/>
            <img src={user4} alt="user4" className='z-2 ml-[742px] absolute sm:ml-[142px]'/>
            <img src={user3} alt="user3" className='z-3 ml-[772px] absolute sm:ml-[172px]'/>
            <img src={user5} alt="user5" className='z-4 ml-[802px] absolute sm:ml-[202px]'/>
            <p className='ml-[811px] z-5 absolute text-[#D25B68] mt-[6px] sm:ml-[212px] sm:text-[14px]'>+2</p>
        </div>
        </div>
    </div>
    <div className='flex mb-[42px] '>
    <div className='border-solid border-box border-[2px] sm:w-[80px] sm:h-[35px] border-lightGrey  w-[122px] h-[40px]  rounded-lg flex-center justify-center mt-[40px] '>
        <div className='flex flex-center '>
            <div> <Icon icon="tabler:filter" className='text-lightGrey font-extrabold ml-[17.27px] sm:ml-1 mr-[8.27px] sm:mr-1 mt-[8px] ' /></div>
           <div><p className='text-lightGrey font-semibold flex-center text-[16px] mt-[6px] sm:text-[13px]'>Filter</p></div>
           <div><Icon icon="simple-line-icons:arrow-down" className='ml-[12.22px] mt-[10.47px] sm:ml-2'/></div>
        </div>
    </div>
    <div className='border-solid border-box border-[2px] sm:w-[80px] sm:h-[35px] border-lightGrey  w-[122px] h-[40px]  rounded-lg flex-center justify-center mt-[40px] ml-[12px] '>
        <div className='flex flex-center '>
            <div> <Icon icon="solar:calendar-date-outline" className='text-lightGrey font-extrabold ml-[17.27px] mr-[8.27px] sm:ml-1 sm:mr-1 mt-[8px] ' /></div>
           <div><p className='text-lightGrey font-semibold flex-center text-[16px] mt-[6px] sm:text-[13px]'>Today</p></div>
           <div><Icon icon="simple-line-icons:arrow-down" className='ml-[6.22px] mt-[10.47px] sm:ml-1'/></div>
        </div>
    </div>
    <div className='border-solid border-box border-[2px] border-lightGrey  w-[97px] h-[40px] sm:w-[80px] sm:h-[35px] rounded-lg flex-center justify-center mt-[40px] ml-[617px] sm:ml-[5px] sm:text-[14px]'>
        <div className='flex flex-center'>
            <div><Icon icon="solar:users-group-rounded-linear" className='text-lightGrey font-extrabold ml-[10.27px] mr-[8.27px] sm:ml-1 sm:mr-1 mt-[8px] ' /></div>
           <div><p className='text-lightGrey font-semibold flex-center text-[16px] mt-[6px] sm:text-[13px]'>Share</p></div>
        </div>
    </div>
    <div className='border-lightGrey h-[28px] w-0 ml-[20px]  mt-[45.5px] border-solid border-[1px] sm:hidden md:hidden'></div>
        <div className='bg-blueLine w-[40px] flex h-[40px] ml-[20px] sm:ml-[10px] justify-center items-center rounded-lg mt-[40.5px]'>
        <div><Icon icon="heroicons-outline:menu-alt-4" className=' text-white font-extrabold text-[25px]' /></div>
    </div>
        <div><Icon icon="ri:apps-2-line" className='ml-[20px] sm:ml-[10px] mt-[50.5px] ' /></div>
    </div>
    </div>
    )
}

export default CenterHeading;