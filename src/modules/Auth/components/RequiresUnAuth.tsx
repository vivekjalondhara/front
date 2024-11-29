// // ** Packages **
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { PRIVATE_NAVIGATION } from "constants/navigation.constant";
import { getAuth } from "../../../redux/slices/authSlice";

const RequiresUnAuth = () => {
  // // ** Hooks **
  const { isAuthenticated } = useSelector(getAuth);

  if (isAuthenticated) {
    return <Navigate to={PRIVATE_NAVIGATION.dashboard.view} />;
  }

  return (
    <Suspense fallback={<>Loading</>}>
      <Outlet />
    </Suspense>
  );
};

export default RequiresUnAuth;
