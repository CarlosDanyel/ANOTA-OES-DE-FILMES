import styled from "styled-components";

export const StarItem = styled.ul`
  display: flex;
  gap: 6px;
  list-style: none;

  li {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    font-size: 18px;

    margin: 3px 0 15px 0;
  }
`;
