import React from 'react';
import styled from 'styled-components';
import { FaWineGlass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Wrapper>
        <NavWrapper>
          <Logo to='/'>
            <FaWineGlass />
            <h1>Wine Note</h1>
          </Logo>
          <MenuWrapper>
            <Menu to='/review'>기록하기</Menu>
            <Menu to='/analysis'>분석하기</Menu>
          </MenuWrapper>
        </NavWrapper>
        <Profile></Profile>
      </Wrapper>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.font_white};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  cursor: pointer;

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.logo};
    font-weight: 700;
    margin-bottom: -3px;
  }

  & svg {
    width: 28px;
    height: 28px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

const Menu = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;
