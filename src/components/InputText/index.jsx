import { InputContainer } from "./styles.js";

export const InputText = ({ type, titlePlaceholder, ...res }) => {
  return <InputContainer type={type} placeholder={titlePlaceholder} {...res} />;
};
