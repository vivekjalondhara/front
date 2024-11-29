// ** packages **
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// ** components **
import AuthMainCard from "modules/Auth/components/AuthMainCard";
import AuthHeaderCard from "modules/Auth/components/AuthHeaderCard";
import AuthBodyCard from "modules/Auth/components/AuthBodyCard";

// ** services **
import { useLoginAPI } from "modules/Auth/services";
import useLoginService from "../hooks/useLoginService";

// ** validation-schema **
import { loginSchema } from "../validation-schema";

// ** redux **
import { setAuthenticated } from "../../../../../redux/slices/authSlice";

// ** types **
import { loginDataType } from "../types";

// ** constant **
import {
  PRIVATE_NAVIGATION,
  PUBLIC_NAVIGATION,
} from "constants/navigation.constant";
import { parseData } from "Utils";
import Button from "components/Theme/Components/Button";
import PasswordField from "components/FormField/common/PasswordField";
import EmailField from "components/FormField/common/EmailField";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isVerified } = useLoginService();
  const { loginAPI, isLoading: loginLoading } = useLoginAPI();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  // ** here set the remember value **
  useEffect(() => {
    const rememberMeString: string | null = localStorage.getItem("remember-me");
    const rememberMeValue: loginDataType = parseData(rememberMeString);

    if (rememberMeValue && rememberMeValue.email && rememberMeValue.password) {
      reset({
        ...rememberMeValue,
        password: rememberMeValue.password,
      });
    }
  }, []);
  const setUserRememberToLocal = (loginData: loginDataType) => {
    if (loginData.rememberMe) {
      localStorage.setItem("remember-me", JSON.stringify(loginData));
    } else {
      localStorage.removeItem("remember-me");
    }
  };
  const onSubmit = handleSubmit(async (loginData: loginDataType) => {
    const loginUserData = {
      email: loginData.email,
      password: loginData.password,
    };
    const { data, error }: any = await loginAPI(loginUserData);
    if (data && !error) {
      setUserRememberToLocal(loginData);
      localStorage.setItem("access_token", data?.data.token);
      isVerified();
      dispatch(
        setAuthenticated({
          isAuthenticated: true,
        })
      );
      navigate(PRIVATE_NAVIGATION.dashboard.view);
    }
  });
  return (
    <AuthMainCard>
      <AuthHeaderCard
        header="Login"
        subHeading="Please enter your email and password in order to continue."
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

          <PasswordField
            id="password"
            name="password"
            type="password"
            required
            label="Password"
            register={register}
            errors={errors.password}
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6 cursor-pointer">
              <span
                className="font-normal text-primaryColor"
                onClick={() => navigate(PUBLIC_NAVIGATION.forgotPassword)}
              >
                Forgot password?
              </span>
            </div>
          </div>

          <div className="submit__btn__wrapper mt-[22px]">
            <Button
              loading={loginLoading}
              type="submit"
              className={`primary__Btn w-full`}
            >
              Login
            </Button>
          </div>
        </form>
        <div className="flex justify-center mt-[22px]">
          <p>
            New Here?
            <span
              onClick={() => {
                navigate(PUBLIC_NAVIGATION.register);
              }}
              className=" inline-block ml-[5px] cursor-pointer text-primaryColor hover:underline"
            >
              Create Account
            </span>
          </p>
        </div>
      </AuthBodyCard>
    </AuthMainCard>
  );
};
export default LoginForm;
