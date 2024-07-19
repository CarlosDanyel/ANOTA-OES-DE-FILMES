import imgAvatar from "../../assets/avatar_placeholder.svg";
import { BtnExit } from "../../components/BtnExit";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Avatar, Container, Form } from "./styles";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export const Profile = () => {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [passwordNew, setPasswordNEw] = useState();

  const avatURl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : imgAvatar;

  const [avatar, setAvatar] = useState(avatURl);
  const [avatarFilfe, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: password,
    };
    const UserUpdated = Object.assign(updated, user);

    await updateProfile({ user: UserUpdated, avatarFilfe });
  }

  function handleAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <BtnExit href="/" />
      </header>
      <Form action="/">
        <Avatar>
          <img src={avatar} alt={`Foto do usuario ${name}`} />
          <label htmlFor="avatar">
            <input onChange={handleAvatar} id="avatar" type="file" />
          </label>
        </Avatar>
        <InputText
          setEstate={setName}
          value={name}
          type="text"
          titlePlaceholder="Nome"
        />
        <InputText
          setEstate={setEmail}
          value={email}
          type="Email"
          titlePlaceholder="Email"
        />
        <InputText
          setEstate={setPassword}
          type="password"
          titlePlaceholder="Senha Atual"
        />
        <InputText
          setEstate={setPasswordNEw}
          type="password"
          titlePlaceholder="Nova senha"
        />
        <Button clickBtnForm={handleUpdateProfile} title="Salvar" />
      </Form>
    </Container>
  );
};
