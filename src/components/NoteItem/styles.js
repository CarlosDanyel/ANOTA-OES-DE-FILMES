import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-basis: auto;

  justify-content: space-between;
  gap: 24px;

  padding: 16px;
  border-radius: 10px;

  background-color: transparent;

  color: #948f99;
  border: 2px dashed #948f99;
  box-sizing: border-box;

  > button {
    border: none;

    background: none;

    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    font-size: 24px;

    display: flex;
    align-items: center;
  }

  > input {
    width: 140px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Slab";

    background: transparent;
    border: none;

    &::placeholder {
      font-family: "Roboto";

      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #948f99;
    }
  }
`;
