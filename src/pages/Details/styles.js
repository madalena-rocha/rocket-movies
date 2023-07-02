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

    width: 100%;
    max-width: 113.7rem;
    margin: 4rem auto;

    header {
      display: flex;
      flex-direction: column;

      margin-bottom: 4rem;

      button {
        background: none;
        border: none;
      }

      div {
        display: flex;
        align-items: center;
      }

      .movie-info {
        gap: 0.8rem;
        margin-top: 2.4rem;

        p:nth-child(1),
        div {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        img {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
        }

        svg {
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }

      h1 {
        font-weight: 500;
        font-size: 3.6rem;
        margin-right: 1.9rem;
      }
    }

    > p {
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-top: 4rem;
      max-width: calc(100% - 0.8rem);

      line-height: 2.1rem;
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};

      width: calc(50% - 2rem);
      margin-top: 4rem;
    }
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;
