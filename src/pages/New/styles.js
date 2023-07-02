import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 1.6rem 1.6rem 0.8rem;
    border-radius: 0.8rem;
  }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 4.6rem auto;

  > header {
    display: flex;
    flex-direction: column;

    margin-bottom: 4rem;

    button {
      background: none;
      border: none;
    }

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
    }
  }

  > div {
    display: flex;
    gap: 4rem;

    button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  textarea {
    margin-top: 3.2rem;
  }
`;
