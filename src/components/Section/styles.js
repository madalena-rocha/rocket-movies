import styled from "styled-components";

export const Container = styled.section`
  margin: 32px 0 24px;
  
  > h2 {
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 20px;
    font-weight: 400;
  }
`;
