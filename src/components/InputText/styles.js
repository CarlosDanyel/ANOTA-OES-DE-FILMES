import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  height: 56px;

  background-color: #262529;
  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "Roboto Slab";

  padding: 19px 0 19px 24px;

  background-repeat: no-repeat;
  background-position: 16px center;

  &::placeholder {
    font-family: "Roboto Slab";

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #948f99;
  }
`;
