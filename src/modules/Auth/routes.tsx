// ** packages **
import { Suspense } from "react";

// ** components **
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { RouteObjType } from "routes";

const applySuspense = (routes: RouteObjType[]): RouteObjType[] => {
  return routes.map((route: RouteObjType) => ({
    ...route,
    element: <Suspense fallback={<>Loading</>}>{route.element}</Suspense>,
  }));
};
const AuthenticationRoutes = applySuspense([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
]);
export default AuthenticationRoutes;
