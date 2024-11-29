type AuthMainCardPropsType = {
  children: React.ReactNode;
};
const AuthMainCard = (props: AuthMainCardPropsType) => {
  const { children } = props;
  return (
    <div className="loginAuth__vh__wrapper min-h-screen w-full py-[40px] px-[15px] flex items-center justify-center">
      <div className="loginAuth__main__wrapper w-[500px] max-w-full">
        <div className="loginAuth__box shadow-raiseShadow rounded-[12px] bg-bgWhiteSD">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AuthMainCard;
