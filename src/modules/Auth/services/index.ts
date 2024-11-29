// ** packages **
import { AxiosRequestConfig } from "axios";
import { useAxiosGet, useAxiosPost } from "hooks/useAxios";
// ** hooks **

const AUTH_API_BASE_PATH = "/auth";
export const useRegisterAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();
  const registerAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${AUTH_API_BASE_PATH}/register`, data, config);
  };
  return { registerAPI, isLoading, isError, isSuccess };
};

export const useLoginAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();
  const loginAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${AUTH_API_BASE_PATH}/login`, data, config);
  };
  return { loginAPI, isLoading, isError, isSuccess };
};

export const useForgotPasswordAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();
  const forgotPasswordAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${AUTH_API_BASE_PATH}/forgot_password`, data, config);
  };
  return { forgotPasswordAPI, isLoading, isError, isSuccess };
};

export const useResetPasswordAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();
  const resetPasswordAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${AUTH_API_BASE_PATH}/forgot_password`, data, config);
  };
  return { resetPasswordAPI, isLoading, isError, isSuccess };
};

export const useLoggedUserAPI = () => {
  // ** Custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosGet();

  const loggedUserAPI = async (data: object) => {
    return callApi(`${AUTH_API_BASE_PATH}/logged-in-user`, data);
  };

  return { loggedUserAPI, isLoading, isError, isSuccess };
};
