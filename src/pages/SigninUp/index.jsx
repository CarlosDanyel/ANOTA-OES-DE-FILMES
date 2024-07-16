import { Backgound, Container, Form } from "./style";

import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

export const SigninUp = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <InputText type="text" titlePlaceholder="Nome" />
        <InputText type="email" titlePlaceholder="E - mail" />
        <InputText type="password" titlePlaceholder="Senha" />

        <Button href="/signin" title="Cadastrar" />
        <Button href="/signin" title="Voltar para o login" icon={FaArrowLeft} />
      </Form>
      <Backgound />
    </Container>
  );
};
