// ** packages **
import { useDispatch } from "react-redux";

import { useLoggedUserAPI } from "modules/Auth/services";
import {
  setAuthenticated,
  setCurrentUser,
} from "../../../../../redux/slices/authSlice";

const useLoginService = () => {
  const { loggedUserAPI } = useLoggedUserAPI();
  const dispatch = useDispatch();
  const isVerified = async () => {
    const { data, error }: any = await loggedUserAPI({});
    if (!error && data) {
      const user = {
        name: data.name,
        email: data.last_name,
      };
      dispatch(setCurrentUser({ user }));
      dispatch(
        setAuthenticated({
          isAuthenticated: true,
        })
      );
    }
  };
  return { isVerified };
};
export default useLoginService;
