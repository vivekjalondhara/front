// ** packages **
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// ** service **
import { useLoggedUserAPI } from "../services";
import {
  getAuth,
  setAuthenticated,
  setAuthInitialized,
  setCurrentUser,
} from "../../../redux/slices/authSlice";

const useAuthGuard = () => {
  // ** Hooks **
  const dispatch = useDispatch();
  const { isAuthenticated, isAuthInitialized } = useSelector(getAuth);

  // ** APIS **
  const { loggedUserAPI, isLoading } = useLoggedUserAPI();

  useEffect(() => {
    loadUser();
  }, []);

   const loadUser = async () => {
    if (!isAuthenticated && !isAuthInitialized) {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { data, error } = await loggedUserAPI({});

        if (!error && data) {
          const user = {
            name: data.name,
            email: data.email,
          };
          dispatch(setCurrentUser({ user }));
          dispatch(
            setAuthenticated({
              isAuthenticated: true,
            })
          );
        }
      }
      dispatch(setAuthInitialized());
    }
  };
  return {
    isLoading,
    isAuthenticated,
    isAuthInitialized,
  };
};

export default useAuthGuard;
