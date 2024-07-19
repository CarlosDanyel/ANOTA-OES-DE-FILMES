import { useEffect, useState } from "react";
import { BtnExit } from "../../components/BtnExit";
import { CardFilmeAvaliacao } from "../../components/CardFilmeAvaliacao";
import { Header } from "../../components/Header";

import { Container, Display } from "./styles";

import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const Filme = () => {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Display>
            <div>
              <BtnExit href="/" />
            </div>
            <CardFilmeAvaliacao data={data} />
          </Display>
        </main>
      )}
    </Container>
  );
};
