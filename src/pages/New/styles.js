import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 16px 16px 8px;
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 46px auto;

  > header {
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 8px;

      margin-bottom: 24px;
    }

    h1 {
      font-weight: 500;
      font-size: 36px;
    }
  }

  > div {
    display: flex;
    gap: 40px;

    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  textarea {
    margin-top: 32px;
  }
`;
