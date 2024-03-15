import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/admin.layout";
import Login from "../pages/root/login";
import path from "path";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
