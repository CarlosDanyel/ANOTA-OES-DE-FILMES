import { InputContainer } from "./styles.js";

export const InputText = ({ type, titlePlaceholder, setEstate, ...res }) => {
  return (
    <InputContainer
      onChange={(e) => setEstate(e.target.value)}
      type={type}
      placeholder={titlePlaceholder}
      {...res}
    />
  );
};
