import { BtnExit } from "../../components/BtnExit";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { NoteItem } from "../../components/NoteItem";
import { TeaxtArea } from "../../components/TextArea";
import { Bookmarks, Container, Display, Form } from "./styles";

export const New = () => {
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
              <InputText titlePlaceholder="Título" />
              <InputText titlePlaceholder="Sua nota (de 0 a 5)" />
            </div>
            <TeaxtArea placeholder="Observações" />
            <Bookmarks>
              <span>Marcadores</span>
              <div>
                <NoteItem value="Ficcao " />
                <NoteItem isNew placeholder="Novo marcador" />
              </div>
              <div>
                <Button title="Excluir filme" />
                <Button title="Salvar alterações" />
              </div>
            </Bookmarks>
          </Form>
        </Display>
      </main>
    </Container>
  );
};
