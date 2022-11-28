import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 16px;
  border-radius: 8px;
  margin-right: 8px;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
