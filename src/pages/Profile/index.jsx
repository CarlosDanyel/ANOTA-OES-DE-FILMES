import { BtnExit } from "../../components/BtnExit";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Avatar, Container, Form } from "./styles";

export const Profile = () => {
  return (
    <Container>
      <header>
        <BtnExit href="/" />
      </header>
      <Form action="/">
        <Avatar>
          <img
            src="https://github.com/CarlosDanyel.png"
            alt="Foto do Usuario"
          />
          <label htmlFor="avatar">
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <InputText type="text" titlePlaceholder="Nome" />
        <InputText type="Email" titlePlaceholder="Email" />
        <InputText type="password" titlePlaceholder="Senha Atual" />
        <InputText type="password" titlePlaceholder="Nova senha" />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
};
