import React from 'react';
import styled from 'styled-components';
import { defaultWidth } from '../../styles/GlobalStyle';
import Category from './Category';
import WineContainer from './WineContainer';
import SearchBar from './SearchBar';

const Content = () => {
  return (
    <Container>
      <Wrapper>
        <SideBar>
          <SearchBar />
          <Category />
        </SideBar>
        <WineContainer />
      </Wrapper>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white_gray};

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 50px;
  display: flex;
  gap: 40px;
  color: ${({ theme }) => theme.colors.text_black};
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
