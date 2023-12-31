import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import { Profile, Tables, TaskManager } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import PrivateRoute from "./PrivateRoute";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Task-Manager",
        path: "/TaskManager",
        element: (
          <PrivateRoute>
            <TaskManager />
          </PrivateRoute>
        ),
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "User list",
        path: "/userList",
        element: (
          <PrivateRoute>
            <Tables />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/signIn",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
