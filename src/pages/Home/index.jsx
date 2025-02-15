import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

import { Header } from "../../components/Header";

import { api } from "../../services/api.js";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/index.jsx";
import { CardFilme } from "../../components/CardFilmes/index.jsx";

import { Container, ContainerNewFilme, Display } from "./styles.js";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  function handleDetails(id) {
    navigate(`/filme/${id}`);
  }

  return (
    <>
      <Container>
        <Header setEstate={setSearch} />
        <main>
          <Display>
            <div>
              <h1>Meus filmes</h1>
              <Link to="/new">
                <Button title="Adicionar filme" icon={IoAdd} />
              </Link>
            </div>
            <ContainerNewFilme>
              {notes.map((note, index) => (
                <a key={index} onClick={() => handleDetails(note.id)}>
                  <CardFilme data={note} />
                </a>
              ))}
            </ContainerNewFilme>
          </Display>
        </main>
      </Container>
    </>
  );
};
