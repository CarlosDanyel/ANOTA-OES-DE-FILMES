import { Btn } from "./styles";

export const Button = ({ title, icon: Icon, type }) => {
  return (
    <Btn type={type}>
      {Icon && <Icon />}
      {title}
    </Btn>
  );
};
