import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 105px auto;

  > main {
    grid-area: content;
    width: 100%;
    overflow-y: auto;
    padding: 50px 0;
  }
`;

export const Display = styled.section`
  max-width: 1137px;
  margin: 0 auto;
  width: 90%;

  > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-family: "Roboto Slab";

      font-weight: 400;
      font-size: 32px;
      line-height: 42px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const ContainerNewFilme = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 716px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 0 8px 0 0;

  &::-webkit-scrollbar {
    width: 8px;
    max-height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff859b;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
`;
