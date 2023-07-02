import styled from "styled-components";

export const Container = styled.button`
  width: calc(100% - 0.8rem);
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;
  margin-right: 0.8rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 0.8rem;
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin: 1.5rem 0;
    max-height: 5.3rem;

    line-height: 1.9rem;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`;
