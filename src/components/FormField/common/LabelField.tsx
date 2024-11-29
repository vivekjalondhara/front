// ** Type **

import { LabelPropsType } from "../Types/label.types";


const Label = (props: LabelPropsType) => {
  const {
    label = "",
    labelClass = "",
    id = "",
    required,
    labelTextClass = "",
  } = props;
  return (
    <label htmlFor={id} className={`label__DSD ${labelClass}`}>
      <span className={`label__text ${labelTextClass}`}>
        {label && label !== "" ? label : ""}
      </span>
      {required ? <span className="required__sign">*</span> : <></>}{" "}
    </label>
  );
};

export default Label;
