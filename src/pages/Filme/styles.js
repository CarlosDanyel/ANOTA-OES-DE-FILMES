import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    width: 100%;
    overflow-y: auto;
    grid-area: content;
    padding-bottom: 3.5rem;
  }
`;

export const Display = styled.section`
  max-width: 1137px;
  margin: 40px auto 0 auto;
  width: 90%;
`;

export const FilmeAvaliation = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 19px;
  }
`;
