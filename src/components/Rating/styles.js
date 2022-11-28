import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ isBigSize }) => (isBigSize ? "10px" : "6px")};
  
  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? "20px" : "12px")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
