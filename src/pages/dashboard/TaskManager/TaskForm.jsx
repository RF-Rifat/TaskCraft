// TaskForm.js
import React from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>
        Title:
        <input {...register("title", { required: true })} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
