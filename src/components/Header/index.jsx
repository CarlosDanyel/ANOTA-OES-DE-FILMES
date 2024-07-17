import { Link } from "react-router-dom";
import { InputText } from "../InputText";
import { Container, Display, Profile } from "./styles.js";

export const Header = () => {
  return (
    <Container>
      <Display>
        <a href="/">RocketMovies</a>
        <InputText titlePlaceholder="Pesquisar pelo título" />
        <Profile>
          <div>
            <strong>Carlos Danyel</strong>
            <Link to="/signin">
              <span>Sair</span>
            </Link>
          </div>
          <Link to="/profile">
            <img src="https://github.com/CarlosDanyel.png" alt="Foto Usuario" />
          </Link>
        </Profile>
      </Display>
    </Container>
  );
};
