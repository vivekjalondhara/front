type AuthHeaderCardType = {
  header?: string;
  subHeading: string;
};
const AuthHeaderCard = (props: AuthHeaderCardType) => {
  const { header, subHeading } = props;
  return (
    <div className="loginAuth__header p-[24px] border-b-[1px] border-b-gray-200">
      <h2 className=" main__title text-[22px] font-semibold mb-[7px] text-textDark">
        {header}
      </h2>
      <p className="normal__text text-[16px] font-normal text-textSecondary">
        {subHeading}
      </p>
    </div>
  );
};
export default AuthHeaderCard;
