import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AddTask from "../pages/AddTask";

import BrowseTasksLayout from "../components/BrowseTasksLayout";
import MyTasks from "../pages/MyTasks";
import BrowseTasks from "../pages/BrowseTasks";
import TaskDetailPage from "../pages/TaskDetailPage";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateTask from "../pages/UpdateTask";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: LoginPage,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    // path: "/my-tasks",
    // loader: () => {
    //   const data = fetch("http://localhost:3000/tasks").then((res) =>
    //     res.json(),
    //   );
    //   console.log(data);
    // },
    // element: (
    //   <PrivateRoute>
    //     <MyTasks></MyTasks>
    //   </PrivateRoute>
    // ),
  },

  {
    path: "/browse-tasks-layout",
    Component: BrowseTasksLayout,
    children: [
      {
        path: "browse-tasks",
        loader: () => fetch("http://localhost:3000/tasks"),
        Component: BrowseTasks,
      },
      {
        path: "browse-tasks/:id",
        loader: () => fetch("http://localhost:3000/tasks"),
        element: (
          <PrivateRoute>
            <TaskDetailPage></TaskDetailPage>
          </PrivateRoute>
        ),
      },
      {
        path: "my-tasks",
        loader: () => {
          return fetch("http://localhost:3000/tasks")
            .then((res) => res.json())
            .then((data) => {
              console.log("Loader Data:", data);
              return data;
            });
        },
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/addTask",
    element: <AddTask></AddTask>,
  },
  {
    path: "/update-task/:id",
    loader: ({params}) => fetch(`http://localhost:3000/tasks/${params.id}`),
    Component: UpdateTask,
  },
]);

export default router;