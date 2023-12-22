import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskManagerDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm onSubmit={addTask} />

      <Task tasks={tasks} />
    </div>
  );
};

export default TaskManagerDashboard;
