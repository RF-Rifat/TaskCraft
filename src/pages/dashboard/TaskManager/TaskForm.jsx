// TaskForm.js
import React from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Select,
  Button,
  Textarea,
  Option,
} from "@material-tailwind/react";

const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    console.log(data);
  };

  const priorityLevel = watch("priorityLevel"); // Watch the value of priorityLevel

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-3 p-8">
      <div className="grid grid-cols-2 gap-4">
        <label>
          Title:
          <Input label="Add Title" {...register("title", { required: true })} />
        </label>

        <label>
          Task End Date:
          <Input type="date" {...register("taskEndDate", { required: true })} />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label>
          Task Due Date:
          <Input type="date" {...register("taskDueDate", { required: true })} />
        </label>

        <label>
          Priority Level:
          <Select
            {...register("priorityLevel", { required: true })}
            color="teal"
            label="Set Priority"
            defaultValue={"Set You Task Priority"}
            {...register("taskPriority", { required: true })}
          >
            <Option value="low">Low</Option>
            <Option value="moderate">Moderate</Option>
            <Option value="high">High</Option>
          </Select>
        </label>
      </div>

      <label>
        Additional Details:
        <Textarea {...register("additionalDetails")} />
      </label>

      <Button type="submit" color="blue">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
