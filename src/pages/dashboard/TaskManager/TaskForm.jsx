// TaskForm.js
import React from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Select,
  Button,
  Textarea,
  option,
} from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";

const TaskForm = () => {
  const { register, handleSubmit } = useForm();
  

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://task-manager-server-woad.vercel.app/taskList",
        data
      );
      console.log("Data submitted successfully:", response.data);
      toast.success("Task Added Successfully")
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form
      className="space-y-3 p-8 border border-red-200 my-4 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          Task End Time :
          <Input type="time" {...register("taskEndTime", { required: true })} />
        </label>

        <label className="grid">
          Priority Level:
          <select
            {...register("priorityLevel", { required: true })}
            color="teal"
            defaultValue={"Set You Task Priority"}
            name="priorityLevel"
            className="border rounded p-2"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
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
