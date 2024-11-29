//  ** packages **
import React, { Suspense } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// components **
import RequiresUnAuth from "./modules/Auth/components/RequiresUnAuth";
import RequiresAuth from "./modules/Auth/components/RequireAuth";

// ** constants **
import { PRIVATE_NAVIGATION } from "./constants/navigation.constant";

// ** routes **
import AuthenticationRoutes from "./modules/Auth/routes";
import NotFoundPage from "modules/Auth/pages/NotFound";
import AddTaskForm from "modules/Dashboard/component/AddTaskForm";
import TaskDetails from "modules/Dashboard/component/TaskDetail";

//  ** type **
export type RouteObjType = {
  path?: string;
  element: JSX.Element;
  children?: RouteObject[];
  errorElement?: JSX.Element;
};

const Dashboard = React.lazy(() => import("./modules/Dashboard/index"));
const applySuspense = (routes: RouteObjType[]): RouteObjType[] => {
  return routes.map((route) => ({
    ...route,
    element: <Suspense fallback={<>ds</>}>{route.element}</Suspense>,
  }));
};

export const applyRequiresAuth = (routes: RouteObjType[]): RouteObjType[] => {
  return routes.map((route) => ({
    ...route,
    element: <RequiresAuth>{route.element}</RequiresAuth>,
  }));
};

const Routes = () => {
  const routesForNotAuthenticatedOnly: RouteObjType[] = applySuspense([
    {
      element: <RequiresUnAuth />,
      children: AuthenticationRoutes,
    },
  ]);

  const routesForAuthenticatedOnly: RouteObjType[] = applyRequiresAuth([
    {
      path: PRIVATE_NAVIGATION.dashboard.view,
      element: <Dashboard />,
    },
    {
      path: PRIVATE_NAVIGATION.task.new.view,
      element: <AddTaskForm />,
    },
    {
      path: PRIVATE_NAVIGATION.task.edit.view(),
      element: <AddTaskForm />,
    },
    {
      path: PRIVATE_NAVIGATION.task.detail.view(),
      element: <TaskDetails />,
    },
  ]);

  const notFound: RouteObject[] = [
    {
      path: "*",
      element: (
        <RequiresAuth>
          <NotFoundPage />
        </RequiresAuth>
      ),
    },
  ];

  // route combination of authorize and unauthorize
  const router = createBrowserRouter([
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
    ...notFound,
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
