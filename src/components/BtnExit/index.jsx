import { IoIosArrowRoundBack } from "react-icons/io";
import { Container } from "./styles";

export const BtnExit = ({ href }) => {
  return (
    <Container href={href}>
      <IoIosArrowRoundBack />
      Voltar
    </Container>
  );
};
