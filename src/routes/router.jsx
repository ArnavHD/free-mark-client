import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>
        },
        {
            path: "/auth",
            element: <h1>This is auth layout</h1>
        },
        {
            path: "/my-jobs",
            element: <h1> This is my jobs</h1>,
        },
        {
            path: "/*",
            element: <div>404 Error</div>
        }
    ]
)

export default router;