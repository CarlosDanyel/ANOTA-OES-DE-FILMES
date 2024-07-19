import { InputContainer } from "./styles.js";

export const InputText = ({
  value,
  type,
  titlePlaceholder,
  setEstate,
  ...res
}) => {
  return (
    <InputContainer
      value={value}
      onChange={(e) => setEstate(e.target.value)}
      type={type}
      placeholder={titlePlaceholder}
      {...res}
    />
  );
};
