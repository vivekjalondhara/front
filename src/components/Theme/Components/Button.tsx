// ** Packages **
import { SVGAttributes } from "react";
import Spinner from "./Loader";

// ** Components **

export type ButtonPropsType = {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  smallSpinnerClassName?: string;
  iconClassName?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  want_default_class?: boolean;
} & SVGAttributes<SVGElement>;

const Button = (props: ButtonPropsType) => {
  const {
    type = "button",
    children = <></>,
    className = "",
    smallSpinnerClassName = "",
    loading,
    disabled,
    onClick,
    buttonRef,
    want_default_class = true,
  } = props;
  return (
    <button
      type={type}
      className={`${want_default_class ? "button__task" : ""} ${className} ${
        disabled ? "disable__Btn" : ""
      }`}
      disabled={disabled || loading}
      onClick={onClick}
      ref={buttonRef}
    >
      {loading && (
        <Spinner smallSpinnerClassName={`mr-[10px] ${smallSpinnerClassName}`} />
      )}
      <div className="btn__text">{children}</div>
    </button>
  );
};

export default Button;
