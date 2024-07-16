import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: #262529;

  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "Roboto Slab";

  padding: 19px 0 19px 24px;

  resize: none;

  &::placeholder {
    font-family: "Roboto Slab";

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #948f99;
  }
`;
