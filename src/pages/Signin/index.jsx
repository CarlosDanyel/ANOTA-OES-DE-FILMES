import { Backgound, Container, Form } from "./style";

import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin } = useAuth();

  function handleSigninIn() {
    signin({ email, password });
  }

  return (
    <Container>
      <Form action="/">
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <InputText
          setEstate={setEmail}
          type="email"
          titlePlaceholder="E - mail"
        />
        <InputText
          setEstate={setPassword}
          type="password"
          titlePlaceholder="Senha"
        />

        <Button clickBtnForm={() => handleSigninIn()} title="Entrar" />
        <Link to="/signinup"> Criar Conta</Link>
      </Form>
      <Backgound />
    </Container>
  );
};
