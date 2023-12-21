import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskForm from './TaskForm';
import Task from './Task';

const TaskManagerDashboard = () => {
  const [tasks, setTasks] = useState([]);
  
  const handleDragEnd = (result) => {
    // Handle the drag-and-drop logic here
    // Update the state of tasks based on the result
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="to-do" direction="horizontal">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* Map through tasks and render Task components */}
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskManagerDashboard;
