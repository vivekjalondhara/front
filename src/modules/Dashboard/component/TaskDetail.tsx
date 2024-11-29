import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTaskAPI } from "../services";
import { PRIVATE_NAVIGATION } from "constants/navigation.constant";
import PageLoader from "components/Theme/Components/PageLoader";

const TaskDetails = () => {
  const [task, setTask] = useState<{
    _id: string;
    title: string;
    description?: string;
    status: "Pending" | "In Progress" | "Completed";
    createdAt: string;
    updatedAt: string;
  }>();
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTaskAPI, isLoading: taslGetLoading } = useGetTaskAPI();

  const getTask = async () => {
    if (id) {
      const { data, error } = await getTaskAPI({ taskId: id });
      if (data && !error) {
        setTask(data?.data);
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
        <PageLoader />
      ) : (
        <div
          className="task-details bg-white p-5 rounded-lg shadow-lg w-[500px] mx-auto mt-[100px] transition-all ease-in-out"
          style={{ width: "500px", marginTop: "100px" }}
        >
          <div className="flex justify-between mb-4">
            <button
              className="bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-primaryColor600 transition duration-200"
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <button
              className="bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-primaryColor200 transition duration-200"
              onClick={() =>
                navigate(PRIVATE_NAVIGATION.task.edit.view(task?._id))
              }
            >
              Edit
            </button>
          </div>

          <h2 className="text-2xl mb-4 text-gray-800">{task?.title}</h2>
          <p className="text-base mb-3 text-gray-600">
            <strong className="font-bold text-gray-800">Description:</strong>{" "}
            {task?.description}
          </p>
          <p className="text-base mb-3 text-gray-600">
            <strong className="font-bold text-gray-800">Status:</strong>{" "}
            <span
              className={`status-${task?.status.toLowerCase()} font-semibold`}
            >
              {task?.status}
            </span>
          </p>
          <p className="text-base mb-3 text-gray-600">
            <strong className="font-bold text-gray-800">Created At:</strong>{" "}
            {task?.createdAt ? new Date(task?.createdAt).toLocaleString() : ""}
          </p>
          <p className="text-base mb-3 text-gray-600">
            <strong className="font-bold text-gray-800">Last Updated:</strong>{" "}
            {task?.updatedAt ? new Date(task?.updatedAt).toLocaleString() : ""}
          </p>
        </div>
      )}
    </>
  );
};

export default TaskDetails;
