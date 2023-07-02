import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 2.4rem;
`;
