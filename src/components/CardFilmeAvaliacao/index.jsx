import { IoMdTime } from "react-icons/io";
import { Stars } from "../Stars";
import { TagLi } from "../Tag";
import { Container, ContainerTag, User } from "./style";

export const CardFilmeAvaliacao = ({ data, ...res }) => {
  return (
    <Container {...res}>
      <div>
        <h1>{data.title}</h1>
        <Stars />
      </div>
      <User>
        <span>
          <img src="https://github.com/CarlosDanyel.png" alt="Foto Usuario" />
          Por {data.user}
        </span>
        <span>
          <IoMdTime />
          {data.date} às {data.time}
        </span>
      </User>
      {data.tags && (
        <ContainerTag>
          {data.tags.map((tag, index) => (
            <TagLi key={index} title={tag.name} />
          ))}
        </ContainerTag>
      )}
      <p>{data.description}</p>
    </Container>
  );
};
