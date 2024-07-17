import { Backgound, Container, Form } from "./style";

import { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

import { api } from "../../services/api";

export const SigninUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      return alert("Preencha corretamente todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("usuario cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Nao foi possivel cadastrar");
        }
      });
  };

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <InputText setEstate={setName} type="text" titlePlaceholder="Nome" />
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
        <Button clickBtnForm={() => handleSignup()} title="Cadastrar" />
        <Link to="/">
          <FaArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Backgound />
    </Container>
  );
};
