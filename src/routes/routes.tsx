import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/admin.layout";
import Login from "../pages/root/login";
import Dashboard from "@/pages/admin/dashboard/Dashboard";
// import { ME } from "@/pages/admin/dashboard/dashboard";

// import { ME } from "@/";
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
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

// console.log(ME);
export default router;
