import { Container } from "./style";

export const TeaxtArea = ({ value, placeholder, ...res }) => {
  return (
    <Container placeholder={placeholder} {...res}>
      {value}
    </Container>
  );
};
