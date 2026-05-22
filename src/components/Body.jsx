import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Browse from "./Browse";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/browse" replace /> : children;
};

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute><Login /></PublicRoute>,
    },
    {
      path: "/login",
      element: <PublicRoute><Login /></PublicRoute>,
    },
    {
      path: "/register",
      element: <PublicRoute><Register /></PublicRoute>,
    },
    {
      path: "/browse",
      element: <ProtectedRoute><Browse /></ProtectedRoute>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
