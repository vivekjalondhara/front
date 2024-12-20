import { AxiosRequestConfig } from "axios";
import {
  useAxiosDelete,
  useAxiosGet,
  useAxiosPost,
  useAxiosPut,
} from "hooks/useAxios";

const TASK_API_BASE_PATH = "/tasks";

export const useGetAllTaskAPI = () => {
  // ** Custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosGet();

  const getAllTaskAPI = async (data: object) => {
    return callApi(`${TASK_API_BASE_PATH}/get`, data);
  };

  return { getAllTaskAPI, isLoading, isError, isSuccess };
};

export const useCreateTaskAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();
  const CreateTaskAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${TASK_API_BASE_PATH}/create`, data, config);
  };
  return { CreateTaskAPI, isLoading, isError, isSuccess };
};

export const useUpdateTaskAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPut();
  const updateTaskAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${TASK_API_BASE_PATH}/update`, data, config);
  };
  return { updateTaskAPI, isLoading, isError, isSuccess };
};

export const useGetTaskAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosGet();

  const getTaskAPI = async ({ taskId }: { taskId: string }) => {
    return callApi(`${TASK_API_BASE_PATH}/get/${taskId}`);
  };

  return { getTaskAPI, isLoading, isError, isSuccess };
};

export const useTaskDeleteAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosDelete();
  const deleteTaskAPI = async (
    id: string,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${TASK_API_BASE_PATH}/delete/${id}`, config);
  };
  return { deleteTaskAPI, isLoading, isError, isSuccess };
};
