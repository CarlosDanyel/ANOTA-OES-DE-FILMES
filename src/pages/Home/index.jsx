import { Header } from "../../components/Header";

import { IoAdd } from "react-icons/io5";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button/index.jsx";
import { CardFilme } from "../../components/CardFilmes/index.jsx";
import { Container, ContainerNewFilme, Display } from "./styles.js";

export const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Display>
            <div>
              <h1>Meus filmes</h1>
              <Link to="/new">
                <Button title="Adicionar filme" icon={IoAdd} />
              </Link>
            </div>
            <ContainerNewFilme>
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { id: "1", name: "Ficção Científica" },
                    { id: "2", name: "Drama" },
                    { id: "2", name: "Família" },
                  ],
                }}
              />
              <CardFilme
                data={{
                  title: "Interestellar",
                  description:
                    "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                  tags: [
                    { name: "Ficção Científica" },
                    { name: "Drama" },
                    { name: "Família" },
                  ],
                }}
              />
            </ContainerNewFilme>
          </Display>
        </main>
      </Container>
    </>
  );
};
