// ** Packages **
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuth } from "../../../redux/slices/authSlice";

import { PUBLIC_NAVIGATION } from "constants/navigation.constant";

type Props = {
  children: JSX.Element;
};

const RequiresAuth = (props: Props) => {
  const { children } = props;

  const { isAuthenticated, user } = useSelector(getAuth);

  if (!isAuthenticated || !user) {
    return <Navigate to={PUBLIC_NAVIGATION.login} />;
  }



  return (
      <Suspense fallback={<>"Loading"</>}>{children}</Suspense>
  );
};

export default RequiresAuth;
