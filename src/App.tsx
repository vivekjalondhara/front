import React from "react";

import "./App.css";
import Routes from "routes";
import { useSelector } from "react-redux";
import { getAuth } from "./redux/slices/authSlice";
import useAuthGuard from "modules/Auth/hooks/useAuthGuard";

function App() {
  const { user, isAuthenticated } = useSelector(getAuth);
  const { isLoading, isAuthInitialized } = useAuthGuard();
  return isLoading || !isAuthInitialized || (isAuthenticated && !user) ? (
    <>
      <>Loading</>
    </>
  ) : (
    <>
      <Routes />
    </>
  );
}

export default App;
