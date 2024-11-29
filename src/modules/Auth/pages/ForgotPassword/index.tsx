// ** packages **

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** component **

import AuthHeaderCard from "modules/Auth/components/AuthHeaderCard";
import AuthBodyCard from "modules/Auth/components/AuthBodyCard";
import AuthMainCard from "modules/Auth/components/AuthMainCard";

// ** service **

// ** validation-schema **
import { ForgotPasswordSchema } from "./validation-schema";

// ** constant **
import { PUBLIC_NAVIGATION } from "constants/navigation.constant";

// ** types **
import { forgotPasswordType } from "./types/forgotPassword.type";
import Button from "components/Theme/Components/Button";
import EmailField from "components/FormField/common/EmailField";
import { useForgotPasswordAPI } from "modules/Auth/services";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    forgotPasswordAPI,
    isLoading: forgotPasswordLoading,
    isSuccess,
  } = useForgotPasswordAPI();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordType>({
    defaultValues: { email: "" },
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit = handleSubmit(
    async (forgotPasswordData: forgotPasswordType) => {
      // await forgotPasswordAPI(forgotPasswordData);
    }
  );

  return (
    <AuthMainCard>
      <AuthHeaderCard
        header="Forgot Password"
        subHeading="We will send you a link to reset password on the Mail provided
          by you."
      ></AuthHeaderCard>
      <AuthBodyCard>
        <form className="" onSubmit={onSubmit}>
          <EmailField
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email address"
            required
            register={register}
            errors={errors.email}
          />
          <div className="flex  justify-center space-x-2  mt-[15px] ">
            <Button
              loading={forgotPasswordLoading}
              type="submit"
              className={`primary__Btn w-full `}
              children="Submit"
            />
          </div>
        </form>
        <div className=" mt-10 flex justify-center">
          <p>
            Go Back to &nbsp;
            <span
              onClick={() => {
                navigate(PUBLIC_NAVIGATION.login);
              }}
              className=" text-primaryColor cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </AuthBodyCard>
    </AuthMainCard>
  );
};
export default ForgotPassword;
