import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  display: flex;
  gap: 5.5px;

  color: #ff859b;

  svg {
    font-size: 32px;
  }
`;
