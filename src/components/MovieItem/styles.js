import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

  margin-bottom: 0.8rem;
  margin-right: 2.4rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
