import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;

    padding: 0 144px;

    button {
      background: none;
			border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto;

  > div:nth-child(4) {
    margin-top: 16px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 64px;

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

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }
    
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
