// packages **
import { useForm } from "react-hook-form";

// ** components **
import AuthHeaderCard from "modules/Auth/components/AuthHeaderCard";
import AuthMainCard from "modules/Auth/components/AuthMainCard";
import AuthBodyCard from "modules/Auth/components/AuthBodyCard";

// ** validation-schema **
import { registerSchema } from "../validation-schema";

// ** types **
import { RegisterFormField } from "../types";

// ** constant **
import { PUBLIC_NAVIGATION } from "constants/navigation.constant";
import Button from "components/Theme/Components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/FormField/common/InputField";
import EmailField from "components/FormField/common/EmailField";
import PasswordField from "components/FormField/common/PasswordField";
import { useRegisterAPI } from "modules/Auth/services";
import { useNavigate } from "react-router-dom";

const RegisterDetail = () => {
  const navigate = useNavigate();
  const { registerAPI, isLoading: registerLoading } = useRegisterAPI();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormField>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (registerData: RegisterFormField) => {
    const registerUserData = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    };

    const { data, error }: any = await registerAPI(registerUserData);
    if (data && !error) {
      navigate(PUBLIC_NAVIGATION.login);
    }
  });

  return (
    <AuthMainCard>
      <AuthHeaderCard
        header="Create Account"
        subHeading="Please provide necessary Details to Complete the Sign Up Process"
      ></AuthHeaderCard>

      <AuthBodyCard>
        <form className="" onSubmit={onSubmit}>
          <InputField
            id="name"
            name="name"
            label="Name"
            register={register}
            required
            type="text"
            placeholder="Enter your  name"
            errors={errors.name}
          />

          <EmailField
            id="email"
            name="email"
            type="text"
            label=" Email address"
            register={register}
            required
            errors={errors.email}
            placeholder="Enter your email"
          />
          <PasswordField
            id="password"
            name="password"
            type="password"
            label="Password"
            register={register}
            required
            errors={errors.password}
            placeholder="Enter your password"
          />
          <PasswordField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required
            errors={errors.confirmPassword}
            placeholder="Enter your confirm password"
            register={register}
          />
          <div className="submit__btn__wrapper">
            <Button
              type="submit"
              loading={registerLoading}
              className={`primary__Btn w-full`}
            >
              Register
            </Button>
          </div>
        </form>
        <div className="flex justify-center mt-[22px]">
          <p className="text-textSecondary">
            Already have an account?
            <span
              onClick={() => {
                navigate(PUBLIC_NAVIGATION.login);
              }}
              className="inline-block ml-[5px] cursor-pointer text-primaryColor hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </AuthBodyCard>
    </AuthMainCard>
  );
};
export default RegisterDetail;
