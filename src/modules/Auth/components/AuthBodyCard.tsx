type authBodyCardPropsType = {
  children: React.ReactNode;
};
const AuthBodyCard = (props: authBodyCardPropsType) => {
  const { children } = props;
  return <div className="loginAuth__body p-[24px]">{children}</div>;
};
export default AuthBodyCard;
