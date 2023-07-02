import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 12.3rem;

  position: relative;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  > div {
    margin-right: 0.9rem;
    font-size: 1.4rem;
    line-height: 1.8rem;

    height: 4rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-size: 1.4rem;
  line-height: 1.8rem;

  position: absolute;
  bottom: 3.8rem;
  right: 19.6rem;
`;
