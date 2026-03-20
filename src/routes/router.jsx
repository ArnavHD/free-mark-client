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
import Loading from "../pages/Loading";

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
    //   const data = fetch("https://free-mark-server.vercel.app/tasks").then((res) =>
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
        loader: () => fetch("https://free-mark-server.vercel.app/tasks"),
        Component: BrowseTasks,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "browse-tasks/:id",
        loader: () => fetch("https://free-mark-server.vercel.app/tasks"),
        element: (
          <PrivateRoute>
            <TaskDetailPage></TaskDetailPage>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "my-tasks",
        loader: () => {
          return fetch("https://free-mark-server.vercel.app/tasks")
            .then((res) => res.json())
            .then((data) => {
              // console.log("Loader Data:", data);
              return data;
            });
        },
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
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
    loader: ({ params }) =>
      fetch(`https://free-mark-server.vercel.app/tasks/${params.id}`),
    Component: UpdateTask,
    hydrateFallbackElement: <Loading></Loading>,
  },
]);

export default router;
