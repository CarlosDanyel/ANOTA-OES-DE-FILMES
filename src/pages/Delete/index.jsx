import { useEffect, useState } from "react";

import { Header } from "../../components/Header";

import { api } from "../../services/api.js";

import { CardFilme } from "../../components/CardFilmes/index.jsx";

import { FiX } from "react-icons/fi";
import { BtnExit } from "../../components/BtnExit/index.jsx";

import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerNewFilme,
  Display,
  ExcluiFilme,
} from "./styles.js";

export const DeleteNote = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  async function handleDelete(id) {
    const response = await api.delete(`/notes/${id}`);
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  }

  return (
    <>
      <Container>
        <Header setEstate={setSearch} />
        <main>
          <Display>
            <div>
              <h1>Delete um filme</h1>
              <BtnExit href="/" />
            </div>
            <ContainerNewFilme>
              {notes.map((note, index) => (
                <a key={index}>
                  <ExcluiFilme
                    type="button"
                    onClick={() => handleDelete(note.id)}
                  >
                    <FiX />
                  </ExcluiFilme>
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
