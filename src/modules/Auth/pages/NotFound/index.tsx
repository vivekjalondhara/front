// ** components **
import { PRIVATE_NAVIGATION } from "constants/navigation.constant";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center px-[15px] py-[50px]">
      <div className=" rounded-[12px] bg-bgWhiteSD p-8 text-center">
        <div className="w-[500px] sm:w-full mx-auto">
          <h1 className="text-[#2e3234] font-medium text-[30px] mb-4 mt-2 sm:text-[24px]">
            Page Not Found!
          </h1>
          <p className="text-[16px] text-[#2e3234] sm:text-[14px]">
            We are sorry, the page you requested could not be found. Please go
            back to the homepage!
          </p>
          <div className="flex justify-center mt-[30px]">
            {/* <Button
              className="primary__Btn"
              onClick={() => navigate(PRIVATE_NAVIGATION.dashboard.view)}
            >
              Go To Dashboard
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
