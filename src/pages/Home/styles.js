import styled from "styled-components";
import { Link } from "react-router-dom";

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

    width: 100%;
    max-width: 1137px;
    margin: 48px auto;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 38px;

      h1 {
        font-weight: 400;
      }
    }
  }
`;

export const Content = styled.div`
  max-height: calc(100vh - 297px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 13.5px 32px;
  border-radius: 8px;
`;
