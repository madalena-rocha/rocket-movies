import styled from "styled-components";

export const Container = styled.section`
  margin: 3.2rem 0 2.4rem;

  > h2 {
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 2rem;
    font-weight: 400;
  }
`;
