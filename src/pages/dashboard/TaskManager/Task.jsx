import { AuthProvider } from "@/pages/auth/Provider";
import { PencilIcon } from "@heroicons/react/24/solid";
import { IconButton, Tooltip } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ tasks }) => {
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);

  const { user } = useContext(AuthProvider);
  const { email } = user || {};
  console.log(email);

  return (
    <>
      <div className="w-full flex justify-evenly">
        {/* todo */}
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-blue-gray-300 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="mb-4 w-full">
                <h4 className="text-xl text-center font-bold text-navy-700 dark:text-white">
                  To dos
                </h4>
              </div>
              {
                <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-base font-medium text-navy-700 dark:text-white">
                        Technology behind the Blockchain
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Project #1 .
                        <a
                          className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                          href=" "
                        >
                          See product details
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        {/* Ongoing */}
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="mb-4 w-full">
                <h4 className="text-xl text-center font-bold text-navy-700 dark:text-white">
                  Ongoing
                </h4>
              </div>
              <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                      Technology behind the Blockchain
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Project #1 .
                      <a
                        className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                        href=" "
                      >
                        See product details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                  <Tooltip content="Edit User">
                    <IconButton variant="text">
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* complete */}
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="mb-4 w-full">
                <h4 className="text-xl text-center font-bold text-navy-700 dark:text-white">
                  Complete
                </h4>
              </div>
              <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                      Technology behind the Blockchain
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Project #1 .
                      <a
                        className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                        href=" "
                      >
                        See product details
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                  <Tooltip content="Edit User">
                    <IconButton variant="text">
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
