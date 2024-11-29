import { useEffect, useState } from "react";
import Button from "components/Theme/Components/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  PRIVATE_NAVIGATION,
  PUBLIC_NAVIGATION,
} from "constants/navigation.constant";
import {
  setAuthenticated,
  setAuthInitialized,
  setCurrentUser,
} from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useGetAllTaskAPI, useTaskDeleteAPI } from "./services";
interface Task {
  _id: string;
  title: string;
  description?: string;
  status: "Pending" | "In Progress" | "Completed";
  createdAt: string;
  updatedAt: string;
}
const TaskBoard1 = () => {
  const { getAllTaskAPI } = useGetAllTaskAPI();
  const { deleteTaskAPI, isLoading: deleteTaskLoading } = useTaskDeleteAPI();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState<Task[]>();

  const getAllBoardWithTask = async () => {
    const { data, error } = await getAllTaskAPI({});
    if (data && !error) {
      setData(data?.data);
    }
  };
  useEffect(() => {
    getAllBoardWithTask();
  }, []);

  const deleteTask = async (id: string) => {
    const { error } = await deleteTaskAPI(id);
    if (!error) {
      getAllBoardWithTask();
    }
  };

  const logoutHelper = async () => {
    localStorage.setItem("access_token", "");
    navigate(PUBLIC_NAVIGATION.login);

    dispatch(setCurrentUser({}));
    dispatch(
      setAuthenticated({
        isAuthenticated: false,
      })
    );
    dispatch(setAuthInitialized());
  };
  return (
    <div>
      <div>
        <div className="button-container">
          <Button
            className="primary-btn add-task-btn"
            onClick={() => navigate(PRIVATE_NAVIGATION.task.new.view)}
          >
            Add Task
          </Button>
          <Button
            className="primary-btn logout-btn"
            onClick={() => logoutHelper()}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="task-dashboard">
        <h1 className="dashboard-title">Task Dashboard</h1>
        {data?.length === 0 ? (
          <div className="text-center">No Task Found</div>
        ) : (
          <></>
        )}
        <div className="task-list">
          {data?.map((task) => (
            <div className="task-card" key={task._id}>
              <div className="flex  justify-between items-center">
                <h3>{task.title}</h3>
                <div className="justify-bitween task-actions">
                  <Button
                    className="delete-btn"
                    onClick={() => deleteTask(task._id)}
                    loading={deleteTaskLoading}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div className="task-meta">
                <p>
                  Status:{" "}
                  <span className={`status-${task.status.toLowerCase()}`}>
                    {task.status}
                  </span>
                </p>
              </div>
              <div className="task-actions">
                <Link to={`/task/${task._id}`} className="view-details-link">
                  View Details
                </Link>
                <Link to={`/task/edit/${task._id}`} className="edit-task-link">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard1;
