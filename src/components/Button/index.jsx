import { Btn } from "./styles";

export const Button = ({ clickBtnForm, title, icon: Icon }) => {
  return (
    <Btn type="button" onClick={clickBtnForm}>
      {Icon && <Icon />}
      {title}
    </Btn>
  );
};
