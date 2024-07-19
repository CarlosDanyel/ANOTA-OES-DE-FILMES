import { Link } from "react-router-dom";

import imgAvatar from "../../assets/avatar_placeholder.svg";

import { InputText } from "../InputText";
import { Container, Display, Profile } from "./styles.js";

import { useAuth } from "../../hooks/auth.jsx";
import { api } from "../../services/api.js";

export const Header = ({ setEstate }) => {
  const { signinOut, user } = useAuth();

  const avatURl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : imgAvatar;

  return (
    <Container>
      <Display>
        <a href="/">RocketMovies</a>
        <InputText
          setEstate={setEstate}
          titlePlaceholder="Pesquisar pelo título"
        />
        <Profile>
          <div>
            <strong>{user.name}</strong>
            <button onClick={signinOut}>
              <span>Sair</span>
            </button>
          </div>
          <Link to="/profile">
            <img src={avatURl} alt={`Foto do usuario ${user.name}`} />
          </Link>
        </Profile>
      </Display>
    </Container>
  );
};
