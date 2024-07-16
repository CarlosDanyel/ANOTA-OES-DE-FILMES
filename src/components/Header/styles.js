import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #3e3b47;
`;

export const Display = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    font-family: "Roboto Slab";

    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  > input {
    margin: 0 64px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;

    > strong {
      font-family: "Roboto Slab";

      white-space: nowrap;

      font-weight: 700;
      font-size: 14px;
      line-height: 18px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
      align-self: end;

      font-family: "Roboto Slab";

      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > a img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
    border: 1px solid #3e3b47;
  }
`;
