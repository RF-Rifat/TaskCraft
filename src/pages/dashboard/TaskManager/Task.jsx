import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Priority: {task.priority}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
