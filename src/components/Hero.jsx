import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Columns from './Columns';
import taskData from './taskData';
import CenterHeading from './centerHeading';

const Hero = () => {
  const [todo, setTodo] = useState(() => taskData.filter((task) => task.type === 'Type A'));
  const [onprogress, setOnprogress] = useState(() => taskData.filter((task) => task.type === 'Type B'));
  const [done, setDone] = useState(() => taskData.filter((task) => task.type === 'Type C'));

  const removeItemById = (id, array) => {
    return array.filter((item) => item.id !== id);
  };

  const findItemById = (id, array) => {
    return array.find((item) => item.id === id);
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
    if (source.droppableId === destination.droppableId) return;

    // Remove item from source column
    if (source.droppableId === '1') {
      setTodo((prevTodo) => removeItemById(draggableId, prevTodo));
    } else if (source.droppableId === '2') {
      setOnprogress((prevOnprogress) => removeItemById(draggableId, prevOnprogress));
    } else {
      setDone((prevDone) => removeItemById(draggableId, prevDone));
    }

    // Get item from source
    const task = findItemById(draggableId, taskData);

    // Add item to destination
    if (destination.droppableId === '1') {
        setTodo((prevTodo) => [{ ...task, onprogress: false, done: false }, ...prevTodo]);}
    else if (destination.droppableId === '2') {
        setOnprogress((prevOnprogress) => [{ ...task, onprogress: true, done: false }, ...prevOnprogress]);}
    else {setDone((prevDone) => [{ ...task, onprogress: false, done: true }, ...prevDone]);}
  };

  useEffect(() => {
    // Update the state if taskData changes
    setTodo(taskData.filter((task) => task.type === 'Type A'));
    setOnprogress(taskData.filter((task) => task.type === 'Type B'));
    setDone(taskData.filter((task) => task.type === 'Type C'));
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <CenterHeading/>
      <div className='flex justify-between items-center'>
        <Columns title='TO DO' tasks={todo} id='1' number={'4'} />
        <Columns title='ON PROGRESS' tasks={onprogress} id='2' number={'3'}/>
        <Columns title='DONE' tasks={done} id='3' number={'2'}/>
      </div>
    </DragDropContext>
  );
};
export default Hero;

