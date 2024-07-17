import { Backgound, Container, Form } from "./style";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

export const Signin = () => {
  return (
    <Container>
      <Form action="/">
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <InputText type="email" titlePlaceholder="E - mail" />
        <InputText
          type="password"
          titlePlaceholder="Senha"
          autocomplete="current-password"
        />

        <Button type="submit" title="Entrar" />
        <Link to="/signinup"> Criar Conta</Link>
      </Form>
      <Backgound />
    </Container>
  );
};
