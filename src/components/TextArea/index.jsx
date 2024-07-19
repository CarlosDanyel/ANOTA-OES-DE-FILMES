import { Container } from "./style";

export const TeaxtArea = ({ setEstate, value, placeholder, ...res }) => {
  return (
    <Container
      onChange={(e) => setEstate(e.target.value)}
      placeholder={placeholder}
      {...res}
    >
      {value}
    </Container>
  );
};
