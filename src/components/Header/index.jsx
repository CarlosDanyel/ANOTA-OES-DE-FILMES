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
            <a href="/signin">
              <span>Sair</span>
            </a>
          </div>
          <a href="/profile">
            <img src="https://github.com/CarlosDanyel.png" alt="Foto Usuario" />
          </a>
        </Profile>
      </Display>
    </Container>
  );
};
