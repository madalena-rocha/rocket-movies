import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;

    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto;

  > div:nth-child(4) {
    margin-top: 1.6rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
