import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  display: flex;
  justify-content: space-between;
  
  padding: 0 123px;

  position: relative;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    margin-right: 9px;
    font-size: 14px;
    line-height: 18px;

    height: 40px;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-size: 14px;
  line-height: 18px;

  position: absolute;
  bottom: 38px;
  right: 196px;
`;
