import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    width: 100%;
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Display = styled.section`
  max-width: 1137px;
  margin: 40px auto 0;
  width: 90%;

  height: 783px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding-right: 1rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-family: "Roboto Slab";

      font-weight: 500;
      font-size: 36px;
      line-height: 47px;

      color: #f4ede8;
    }
  }

  > div {
    display: flex;
    gap: 40px;

    margin: 40px 0;
  }
`;

export const Bookmarks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px !important;

  > span {
    font-family: "Roboto Slab";

    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    color: #999591;
  }

  > div {
    display: flex;
    align-items: center;

    > span {
      display: flex;
      justify-content: space-between;

      flex-basis: auto;

      justify-content: space-between;
      gap: 24px;

      padding: 16px;
      border-radius: 10px;

      background-color: #262529;

      color: #ffffff;
      border: none;
      box-sizing: border-box;

      > button {
        border: none;

        background: none;

        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        font-size: 24px;

        display: flex;
        align-items: center;
      }
    }
  }

  > div:nth-of-type(1) {
    display: flex;

    gap: 24px;

    width: 100%;
    padding: 16px;

    background-color: #0d0c0f;

    border-radius: 8px;
    flex-wrap: wrap;
  }

  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    width: 100%;

    a {
      width: 100%;

      > button {
        width: 100%;
      }
    }

    > button {
      width: 100%;
    }

    > a button:nth-of-type(1) {
      background-color: #0d0c0f;
      color: #ff859b;
    }
  }
`;
