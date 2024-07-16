import { Btn } from "./styles";

export const Button = ({ title, icon: Icon, href }) => {
  return (
    <Btn>
      {Icon && <Icon />}
      {title}
    </Btn>
  );
};
