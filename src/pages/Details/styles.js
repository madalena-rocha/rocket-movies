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

    max-width: 1137px;
    margin: 40px auto;

    header {
      display: flex;
      flex-direction: column;

      margin-bottom: 40px;

      a {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        gap: 8px;

        margin-bottom: 24px;
      }

      div {
        display: flex;
        align-items: center;
      }

      .movie-info {
        gap: 8px;
        margin-top: 24px;

        p {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        svg {
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }

      h1 {
        font-weight: 500;
        font-size: 36px;
        margin-right: 19px;
      }
    }

    > p {
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-top: 40px;
      max-width: calc(100% - 8px);

      line-height: 21px;
    }
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
