import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 32px;
  border: none;
  gap: 8px;

  height: 48px;

  background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 8px;

  font-family: "Roboto Slab";

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5;

  color: #312e38;

  > svg {
    font-size: 23px;
  }
`;
