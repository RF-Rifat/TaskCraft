import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";

import { statisticsCardsData } from "@/data";
import axios from "axios";
import Spinner from "@/Shared/Spinner";
import EmptyData from "@/Shared/EmptyData";
import { motion } from "framer-motion";

import TaskManagerDashboard from "./TaskManager/TaskManagerDashboard";
import { Toaster } from "react-hot-toast";
import TextEditor from "./Texteditor";

export function TaskManager() {
 

  return (
    <div className="mb-20">
      <Toaster />
      {/* <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div> */}
      <TaskManagerDashboard />

      {/* text editor */}
      {/* <TextEditor></TextEditor> */}
    </div>
  );
}

export default TaskManager;
