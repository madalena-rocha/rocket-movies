import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

  margin-bottom: 8px;
  margin-right: 24px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
