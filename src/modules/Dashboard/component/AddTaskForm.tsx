// ** Packages  **//
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// ** Components **
import { TextField } from "components/FormField";
import Button from "components/Theme/Components/Button";
import { taskValidatioonSchema } from "../validation-schema";
import { TaskFormData } from "../types";
import { useCreateTaskAPI, useGetTaskAPI, useUpdateTaskAPI } from "../services";
import { useNavigate, useParams } from "react-router-dom";
import { PRIVATE_NAVIGATION } from "constants/navigation.constant";
import SelectField from "components/FormField/common/SelectField";
import PageLoader from "components/Theme/Components/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  getModifiedTask,
  setModifiedTask,
} from "../../../redux/slices/taskSlice";

type PropsType = {
  id?: string | null | undefined;
};

const AddTaskForm = (props: PropsType) => {
  const { id } = useParams();
  const navidate = useNavigate();
  const dispatch = useDispatch();
  const modifiedTask = useSelector(getModifiedTask);

  console.log("modifiedTask", modifiedTask);
  const { CreateTaskAPI, isLoading } = useCreateTaskAPI();
  const { updateTaskAPI, isLoading: updateTaskLoading } = useUpdateTaskAPI();
  const { getTaskAPI, isLoading: taslGetLoading } = useGetTaskAPI();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    register,
  } = useForm<TaskFormData>({
    resolver: yupResolver(taskValidatioonSchema),
  });

  const onSubmit = async (value: TaskFormData) => {
    if (id) {
      console.log("========");
      const newValue = {
        ...value,
        status: value.status.value,
        ...(id && { id: id }),
        // modifiedTask: true,
      };
      dispatch(setModifiedTask([newValue]));

      // const { data, error } = await updateTaskAPI(newValue);
      // if (data && !error) {
      navidate(PRIVATE_NAVIGATION.dashboard.view);
      // }
    } else {
      const newValue = {
        ...value,
        status: value.status.value,
      };
      const { data, error } = await CreateTaskAPI(newValue);
      if (data && !error) {
        navidate(PRIVATE_NAVIGATION.dashboard.view);
      }
    }
  };
  const getTask = async () => {
    if (id) {
      const { data, error } = await getTaskAPI({ taskId: id });
      if (data && !error) {
        reset({
          description: data?.data.description,
          title: data?.data.title,
          status: {
            label: data?.data.status,
            value: data?.data.status,
          },
        });
      }
    }
  };
  useEffect(() => {
    if (id) {
      getTask();
    }
  }, [id]);
  return (
    <>
      {taslGetLoading ? (
        <div>
          <PageLoader />
        </div>
      ) : (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md m-[50px]">
          <h2 className="text-xl font-semibold mb-4">
            {id ? "Update task" : "Add a New Task"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <TextField
                name="title"
                register={register}
                id="title"
                placeholder="Enter task title"
                errors={errors.title}
                label="Enter Title"
              />
            </div>

            <div className="mb-4">
              <TextField
                name="description"
                register={register}
                id="description"
                placeholder="Enter task Description"
                errors={errors.description}
                label="Enter Description"
              />
            </div>
            <SelectField
              control={control}
              label="Status"
              name="status"
              options={[
                { label: "Pending", value: "Pending" },
                { label: "In Progress", value: "In Progress" },
                { label: "Completed", value: "Completed" },
              ]}
              placeholder="Select Status"
              errors={errors.status?.label}
            />
            <div className="mt-6">
              <Button
                type="submit"
                className="primary__Btn w-[150] text-align ml-[10px]"
                loading={isLoading || updateTaskLoading}
              >
                Submit
              </Button>
              <Button
                className="primary__Btn w-[150] text-align ml-[10px]"
                onClick={() => navidate(-1)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTaskForm;
