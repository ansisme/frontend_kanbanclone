import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import './scroll.css';
const Columns = ({ id, priority, title, type, tasks,number }) => {
  const getTaskColorClass = () => {
    if (title === 'TO DO') {
      return 'bg-blueLine';
    } else if (title === 'ON PROGRESS') {
      return 'bg-midYellow';
    } else if (title === 'DONE') {
      return 'bg-midGreen';
    } else {
      return ''; 
    }
  };
  const getBorderColorClass = () => {
    if (title === 'TO DO') {
      return 'border-blueLine';
    } else if (title === 'ON PROGRESS') {
      return 'border-midYellow';
    } else if (title === 'DONE') {
      return 'border-midGreen';
    } else {
      return ''; 
    }
  };
  const plus=()=>{
    if(title==='TO DO') {
      return <div className=' flex bg-opacity-20 bg-blueLine h-[20px] rounded-md w-[20px] flex-center justify-center ml-[187px]'>
      <p className='text-blueLine text-center mt-[-5px] text-[18px]'>+</p>
      </div>
    }
  }
  return (
    <>
    <div className='flex flex-col'>
    <div className='flex flex-row mr-[15px]'>

      <div className='w-[354px] h-[625px] flex flex-col bg-standardBg rounded-3xl scroll-m-0 scrollbar-none overflow-y-scroll border-solid'>
        <div className='mt-[21px] flex items-center'>
        <span className={`pt-[5px] h-2 w-2 rounded-full ml-[20px] mr-2 ${getTaskColorClass()}`}></span>          
          <p className='ml-2 text-blueBlack text-[16px] font-medium'>{title}</p>
          <span className=' bg-[#E0E0E0]  mt-[3px] h-[20px] w-[20px] rounded-full ml-[12px] '>
            <p className='text-[12px] text-[#625F6D] text-center '>{number}</p>
          </span>
          {plus()}
        </div>

        <div>
        <hr className={`w-[314px] h-0 border-solid border-[2px] mt-[23px] mb-[28px] mr-[20px] ml-[20px] ${getBorderColorClass()}`} />
        </div>

        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
             ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${snapshot.isDraggingOver ? 'is-dragging-over' : ''}
            scroll-container`}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        key={task.id}
                        id={task.id}
                        priority={task.priority}
                        title={task.title}
                        type={task.type}
                        task={task}
                        index={index}
                      />
                    </div>  
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
</div>
</div>
    </>
  );
};

export default Columns;
