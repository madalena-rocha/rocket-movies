import styled from "styled-components";

export const Container = styled.button`
  width: calc(100% - 8px);
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;
  margin-right: 8px;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    margin: 15px 0;
    max-height: 53px;
    
    line-height: 19px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
  }
`;
