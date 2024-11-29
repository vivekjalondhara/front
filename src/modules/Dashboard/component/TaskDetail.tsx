import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTaskAPI } from "../services";

const TaskDetails = () => {
  const [task, setTask] = useState<{
    _id: string;
    title: string;
    description?: string;
    status: "Pending" | "In Progress" | "Completed";
    createdAt: string;
    updatedAt: string;
  }>();
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
    <div className="task-details">
      <h2>{task?.title}</h2>
      <p>
        <strong>Description:</strong> {task?.description}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={`status-${task?.status.toLowerCase()}`}>
          {task?.status}
        </span>
      </p>

      <p>
        <strong>Created At:</strong>{" "}
        {task?.createdAt ? new Date(task?.createdAt).toLocaleString() : ""}
      </p>
      <p>
        <strong>Last Updated:</strong>{" "}
        {task?.updatedAt ? new Date(task?.updatedAt).toLocaleString() : ""}
      </p>
    </div>
  );
};

export default TaskDetails;
