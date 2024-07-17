import { IoIosArrowRoundBack } from "react-icons/io";
import { Container } from "./styles";

export const BtnExit = ({ href }) => {
  return (
    <Container to={href}>
      <IoIosArrowRoundBack />
      Voltar
    </Container>
  );
};
