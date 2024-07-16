import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 19px;

    h1 {
      font-family: "Roboto Slab";

      font-weight: 500;
      font-size: 36px;
      line-height: 47px;

      color: #f4ede8;
    }

    ul {
      li {
        margin: 0 !important;
        font-size: 25px;
      }
    }
  }

  p {
    margin-top: 40px;

    font-family: "Roboto Slab";

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #f4ede8;
  }
`;

export const User = styled.div`
  margin: 24px 0 40px 0;

  display: flex;
  gap: 8px;
  align-items: center;

  span {
    display: flex;
    align-items: center;

    font-family: "Roboto";

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    text-align: justify;

    color: #f4ede8;

    > svg {
      margin-right: 6px;
      color: #ff859b;
      font-size: 20px;
    }

    > img {
      margin-right: 8px;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      border: 1px solid #3e3b47;
    }
  }
`;

export const ContainerTag = styled.div`
  display: flex;
  list-style: none;
  gap: 8px;

  > li {
    background-color: #282124;

    font-family: "Roboto";

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #e5e5e5;
  }
`;
