import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    align-items: center;
    padding-left: 144px;

    height: 144px;

    background: rgba(255, 133, 155, 0.05);
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -84px auto 0;

  display: flex;
  flex-direction: column;

  input:nth-of-type(1) {
    padding-left: 52px;
    margin-bottom: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 17.136V15.456C18 14.5649 17.5786 13.7103 16.8284 13.0801C16.0783 12.45 15.0609 12.096 14 12.096H6C4.93913 12.096 3.92172 12.45 3.17157 13.0801C2.42143 13.7103 2 14.5649 2 15.456V17.136' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 9.072C12.2091 9.072 14 7.26681 14 5.04C14 2.81318 12.2091 1.008 10 1.008C7.79086 1.008 6 2.81318 6 5.04C6 7.26681 7.79086 9.072 10 9.072Z' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }

  input:nth-of-type(2) {
    padding-left: 52px;
    margin-bottom: 24pxpx;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.6 2.95189H16.4C17.28 2.95189 18 3.63229 18 4.46389V13.5359C18 14.3675 17.28 15.0479 16.4 15.0479H3.6C2.72 15.0479 2 14.3675 2 13.5359V4.46389C2 3.63229 2.72 2.95189 3.6 2.95189Z' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 5.04001L10 10.08L2 5.04001' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }

  input:nth-of-type(3) {
    padding-left: 52px;
    margin-bottom: 8px;

    background-image: url("data:image/svg+xml,%3Csvg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_8_490)'%3E%3Cpath d='M15.4444 8.17145H4.55556C3.69645 8.17145 3 8.90407 3 9.80781V15.5351C3 16.4388 3.69645 17.1714 4.55556 17.1714H15.4444C16.3036 17.1714 17 16.4388 17 15.5351V9.80781C17 8.90407 16.3036 8.17145 15.4444 8.17145Z' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 8.17144V4.97144C6 3.91057 6.42143 2.89315 7.17157 2.14301C7.92172 1.39286 8.93913 0.971436 10 0.971436C11.0609 0.971436 12.0783 1.39286 12.8284 2.14301C13.5786 2.89315 14 3.91057 14 4.97144V8.17144' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_8_490'%3E%3Crect width='20' height='18' fill='white' transform='translate(0 0.0714417)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  }

  input:nth-of-type(4) {
    padding-left: 52px;
    margin-bottom: 24px;

    background-image: url("data:image/svg+xml,%3Csvg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_8_490)'%3E%3Cpath d='M15.4444 8.17145H4.55556C3.69645 8.17145 3 8.90407 3 9.80781V15.5351C3 16.4388 3.69645 17.1714 4.55556 17.1714H15.4444C16.3036 17.1714 17 16.4388 17 15.5351V9.80781C17 8.90407 16.3036 8.17145 15.4444 8.17145Z' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 8.17144V4.97144C6 3.91057 6.42143 2.89315 7.17157 2.14301C7.92172 1.39286 8.93913 0.971436 10 0.971436C11.0609 0.971436 12.0783 1.39286 12.8284 2.14301C13.5786 2.89315 14 3.91057 14 4.97144V8.17144' stroke='%23948F99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_8_490'%3E%3Crect width='20' height='18' fill='white' transform='translate(0 0.0714417)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  }

  input:nth-of-type(2),
  input:nth-of-type(4) {
    margin-bottom: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 64px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 15.3333C19 15.7754 18.8276 16.1993 18.5207 16.5118C18.2138 16.8244 17.7976 17 17.3636 17H2.63636C2.20237 17 1.78616 16.8244 1.47928 16.5118C1.1724 16.1993 1 15.7754 1 15.3333V6.16667C1 5.72464 1.1724 5.30072 1.47928 4.98816C1.78616 4.67559 2.20237 4.5 2.63636 4.5H5.90909L7.54545 2H12.4545L14.0909 4.5H17.3636C17.7976 4.5 18.2138 4.67559 18.5207 4.98816C18.8276 5.30072 19 5.72464 19 6.16667V15.3333Z' stroke='%23312E38' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z' stroke='%23312E38' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;

    > input {
      width: 48px;
      border-radius: 50%;

      cursor: pointer;
      visibility: hidden;
    }
  }
`;
