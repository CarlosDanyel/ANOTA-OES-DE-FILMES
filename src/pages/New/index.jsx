import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { BtnExit } from "../../components/BtnExit";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { NoteItem } from "../../components/NoteItem";
import { TeaxtArea } from "../../components/TextArea";

import { FiX } from "react-icons/fi";
import { Bookmarks, Container, Display, Form } from "./styles";

export const New = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [tagsNew, setTagsNew] = useState("");

  const navigate = useNavigate();

  function addTag() {
    if (tagsNew == "") {
      alert("Campo vazio, passe o conteudo da tag primeiro");
    } else {
      setTags((prevState) => [...prevState, tagsNew]);
      setTagsNew("");
    }
  }

  function removeTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function addNoteFilme() {
    if (tagsNew) {
      return alert("Campo de tag vazio, adicione ela primeiro");
    }
    if (!title) {
      return alert("Campo de titulo  vazio, adicione ela primeiro");
    }
    if (!rating) {
      return alert("Campo de nota vazio, adicione ela primeiro");
    }
    if (!description) {
      return alert("Campo de nota vazio, adicione ela primeiro");
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com suscesso ");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <Display>
          <Form action="/">
            <header>
              <BtnExit href="/" />
              <h1>Novo Filme</h1>
            </header>
            <div>
              <InputText titlePlaceholder="Título" setEstate={setTitle} />
              <InputText
                titlePlaceholder="Sua nota (de 0 a 5)"
                setEstate={setRating}
              />
            </div>
            <TeaxtArea placeholder="Observações" setEstate={setDescription} />
            <Bookmarks>
              <span>Marcadores</span>
              <div>
                {tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                    <button onClick={() => removeTag(tag)} type="button">
                      <FiX />
                    </button>
                  </span>
                ))}
                <NoteItem
                  placeholder="Novo marcador"
                  setEstate={setTagsNew}
                  value={tagsNew}
                  clickBtnForm={addTag}
                />
              </div>
              <div>
                <Link to="/delete">
                  <Button title="Excluir filme" />
                </Link>
                <Button
                  clickBtnForm={() => addNoteFilme()}
                  title="Salvar alterações"
                />
              </div>
            </Bookmarks>
          </Form>
        </Display>
      </main>
    </Container>
  );
};
