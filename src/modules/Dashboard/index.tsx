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
import InputField from "components/FormField/common/InputField";
import PageLoader from "components/Theme/Components/PageLoader";
import DarkModeToggle from "components/Theme/Components/DarkModeToggle";
interface Task {
  _id: string;
  title: string;
  description?: string;
  status: "Pending" | "In Progress" | "Completed";
  createdAt: string;
  updatedAt: string;
}
const TaskBoard1 = () => {
  const { getAllTaskAPI, isLoading } = useGetAllTaskAPI();
  const { deleteTaskAPI, isLoading: deleteTaskLoading } = useTaskDeleteAPI();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState<Task[]>();
  const [searchQuery, setSearchQuery] = useState("");

  const getAllBoardWithTask = async () => {
    const { data, error } = await getAllTaskAPI({
      params: {
        search: searchQuery,
      },
    });
    if (data && !error) {
      setData(data?.data);
    }
  };
  useEffect(() => {
    getAllBoardWithTask();
  }, [searchQuery]);

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
    <div className="flex justify-between items-start mt-10 px-6">
      <div className="items-center space-x-4">
        <div className="flex items-center mb-[20px]">
          <DarkModeToggle />
        </div>
        <Button
          className="primary-btn logout-btn"
          onClick={() => logoutHelper()}
        >
          Logout
        </Button>
      </div>

      <div className="task-dashboard w-3/4">
        <h1 className="dashboard-title text-2xl font-semibold mb-6">
          Task Dashboard
        </h1>

        <div className="flex justify-end space-x-4 mb-4">
          <InputField
            name="Search"
            placeholder="Search Here "
            className=" search-btn"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => navigate(PRIVATE_NAVIGATION.task.new.view)}
            className={`primary__Btn w-15 h-10 `}
          >
            Add Task
          </Button>
        </div>

        {/* Task List */}
        {data?.length === 0 ? (
          <div className="text-center">No Task Found</div>
        ) : (
          <div className="task-list">
            {isLoading ? (
              <PageLoader />
            ) : (
              data?.map((task) => (
                <div
                  className="task-card bg-white p-4 rounded-lg shadow-md mb-4"
                  key={task._id}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <div className="task-actions flex items-center">
                      <Button
                        className="delete-btn"
                        onClick={() => deleteTask(task._id)}
                        loading={deleteTaskLoading}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="task-meta mt-2">
                    <p>
                      Status:{" "}
                      <span className={`status-${task.status.toLowerCase()}`}>
                        {task.status}
                      </span>
                    </p>
                  </div>
                  <div className="task-actions mt-3 flex space-x-4">
                    <Link
                      to={`/task/${task._id}`}
                      className="view-details-link text-blue-500 hover:underline"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/task/edit/${task._id}`}
                      className="edit-task-link text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskBoard1;
