import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Icon } from '@iconify/react';
import img1 from '../assets/images/taskImages/img1.png';
import img2 from '../assets/images/taskImages/img2.png';
import img3 from '../assets/images/taskImages/img3.png';
import img4 from '../assets/images/taskImages/img4.png';
import user1 from '../assets/images/centerHeading/user1.png';
import user2 from '../assets/images/centerHeading/user2.png';
import user3 from '../assets/images/centerHeading/user3.png';
import user4 from '../assets/images/centerHeading/user4.png';
import user6 from '../assets/images/centerHeading/user6.png';
const Task = ({ priority,task, index }) => {
  const getTaskColorClass = () => {
    if (priority === 'Low') {
      return 'bg-[#DFA874] text-[#DFA874]';
    } else if (priority === 'High') {
      return 'bg-[#D8727D] text-[#D8727D]';
    } else if (priority === 'Completed') {
      return 'bg-[#83C29D] text-[#83C29D]';
    } else {
      return ''; // Default color or class if none of the conditions are met
    }
  };

  const widthStyles=()=>{
    if (priority === 'Low') {
      return 'w-[36px]';
    } else if (priority === 'High') {
      return 'w-[39px]';
    } else if (priority === 'Completed') {
      return 'w-[76px]';
    } else {
      return ''; 
    }
  }
  
  const dots=()=>{
    if(priority === 'Low') {
      return 'ml-[222px]'
    }
    else if (priority === 'High') {
      return 'ml-[219px] '
    }
    else if (priority === 'Completed'){
      return 'ml-[182px]'
    }
    else{
      return ''
    }
  }
  const tasks=()=>{
    if(task.id === 'task-1'){
      return task.title='Brainstorming';
    }
    else if(task.id === 'task-2'){
      return task.title='Research';
    }
    else if(task.id === 'task-3'){
      return task.title='Wireframes';
    }
    else if(task.id === 'task-4'){
      return task.title='Onboarding Illustrations';
    }
    else if(task.id === 'task-5'){
      return task.title='Moodboard';
    }
    else if(task.id === 'task-6'){
      return task.title='Design System';
    }
    else if(task.id === 'task-7'){
      return task.title='Mobile Design System';
    }
  }

  const taskfacilities=()=>{
    if(task.id === 'task-1'){
      return <div className='flex flex-col'>
      <p>Brainstorming brings team members' diverse experience into play. </p>
      <div className='flex mt-[28px]'>
      <img src={user1} alt='user1' className='h-[24px] w-[24px] z-10'/>
      <img src={user3} alt='user3' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <img src={user4} alt='user4' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[43px]' />
      <p className='ml-[6px]'>12 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>0 files</p>
      </div>
      </div>
      </div>
    }
    else if(task.id === 'task-2'){
      return <div><p>User research helps you to create an optimal product for users.</p>
      <div className='flex mt-[28px]'>
      <img src={user2} alt='user2' className='h-[24px] w-[24px] z-10'/>
      <img src={user6} alt='user6' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[43px]' />
      <p className='ml-[6px]'>10 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>3 files</p>
      </div>
      </div>
      </div>
    }
    else if(task.id === 'task-3'){
      return <div><p>Low fidelity wireframes include the most basic content and visuals.</p>
      <div className='flex mt-[28px]'>
      <img src={user1} alt='user1' className='h-[24px] w-[24px] z-10'/>
      <img src={user3} alt='user3' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[43px]' />
      <p className='ml-[6px]'>9 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>2 files</p>
      </div>
      </div>
      </div>
    }
    else if(task.id === 'task-4'){
      return <div><img src={img1} alt="img1"/>
      <div className='flex mt-[28px]'>
      <img src={user1} alt='user1' className='h-[24px] w-[24px] z-10'/>
      <img src={user3} alt='user3' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <img src={user4} alt='user4' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[37px]' />
      <p className='ml-[6px]'>14 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>15 files</p>
      </div>
      </div>
      </div>
    }
    else if(task.id === 'task-5'){
      return <div className='flex flex-col'>
      <div className='flex'>
      <img src={img2} alt="img2"/> <img src={img3} alt="img2"/>
      </div>
      <div className='flex mt-[28px]'>
      <img src={user4} alt='user4' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[43px]' />
      <p className='ml-[6px]'>9 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>10 files</p>
      </div>
      </div>
      </div> ;
    }
    else if(task.id === 'task-6'){
      return <div><img src={img4} alt="img4"/>
      <div className='flex mt-[28px]'>
      <img src={user6} alt='user' className='h-[24px] w-[24px] z-10'/>
      <img src={user3} alt='user3' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[43px]' />
      <p className='ml-[6px]'>12 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>15 files</p>
      </div>
      </div>
      </div>
    }
    else if(task.id === 'task-7'){
     return <div><p>It just needs to adapt the UI from what you did before</p>
     <div className='flex mt-[28px]'>
      <img src={user1} alt='user1' className='h-[24px] w-[24px] z-10'/>
      <img src={user4} alt='user4' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <img src={user3} alt='user3' className='h-[24px] w-[24px] z-0 ml-[-4px]'/>
      <div className='flex'>
      <Icon icon="system-uicons:message-writing" alt="message" className='h-[16px] w-[15px] ml-[37px]' />
      <p className='ml-[6px]'>12 comments</p>
      </div>
      
      <div className='flex'>
      <Icon icon="solar:folder-with-files-linear" alt="message" className='h-[15px] w-[15px] ml-[15px]' />
      <p className='ml-[6px]'>15 files</p>
      </div>
      </div>
      </div>
    }
  }
  return (
    <Draggable draggableId={task.id} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div
  className={`rounded-2xl bg-white m-[20px] w-[314px] ${
    snapshot.isDragging ? 'transform translate-y-[5px] translate-x-[4px]' : ''
  }`}
  {...provided.draggableProps}
  {...provided.dragHandleProps}
  ref={provided.innerRef}
>

          <div className='p-[20px]'>
          <div className={`${getTaskColorClass()} flex bg-opacity-20 h-[23px] mt-[4px] ${widthStyles()}  rounded-md `}>
            <p className={` pt-[2px] pl-[6px] text-[12px] text-center font-medium  `}>
            {task.priority}
          </p>
          <div className={` ${dots()} mt-[-10px]`}>
            <p className='text-blueBlack font-extrabold'>...</p>
          </div>
          </div>
          <div>
          <p className={`${tasks()}text-blueBlack text-[18px] pt-[8px] pb-[6px] font-semibold`}>
            {task.title}
          </p>
          </div>
          <div className='text-lightGrey text-[12px]'>{taskfacilities()}</div>
        </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
