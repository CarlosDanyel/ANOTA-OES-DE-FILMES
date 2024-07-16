import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;

  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;

  h1 {
    font-family: "Roboto Slab";

    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p {
    text-align: justify;

    font-family: "Roboto";

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #999591;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  gap: 8px;

  list-style: none;

  margin-top: 15px;
`;
