import React from 'react';
import styled from 'styled-components';
import { FaWineGlass } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { defaultWidth, flexCenter } from '../../styles/GlobalStyle';
import { BiArchive, BiChart } from 'react-icons/bi';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <HeaderBar>
      <Wrapper>
        <NavWrapper>
          <Logo to='/'>
            <FaWineGlass />
            <h1>Wine Note</h1>
          </Logo>
          <MenuWrapper>
            {pathname !== '/' ? (
              <>
                <Menu to='/winelist'>
                  <BiArchive size={20} />
                  와인 기록
                </Menu>
                <Menu to='/analysis'>
                  <BiChart size={20} />
                  취향 분석
                </Menu>
              </>
            ) : (
              <Desc>와인을 기록하고 취향을 분석해보세요</Desc>
            )}
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
  background-color: ${({ theme }) => theme.colors.wine_purple};

  ${flexCenter}
`;

const Wrapper = styled.div`
  ${defaultWidth}
  display: flex;
  align-items: center;
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
  padding: 10px 0;

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
  gap: 8px;
`;

const Menu = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.md};
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #a2a2a23c;
  }
`;

const Desc = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 10px 0px;
`;

const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;
