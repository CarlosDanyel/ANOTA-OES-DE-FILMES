import { Stars } from "../Stars";
import { TagLi } from "../Tag";
import { Container, ContainerUl } from "./styles";

export const CardFilme = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Stars />
      <p>{data.description}</p>

      {data.tags && (
        <ContainerUl>
          {data.tags.map((tag, index) => (
            <TagLi key={index} title={tag.name} />
          ))}
        </ContainerUl>
      )}
    </Container>
  );
};
