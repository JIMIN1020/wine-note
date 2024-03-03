import React from 'react';
import styled from 'styled-components';
import { defaultWidth } from '../../styles/GlobalStyle';
import Category from './Category';
import WineContainer from './WineContainer';

const Content: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Category />
        <WineContainer />
      </Wrapper>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white};

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 50px;
  display: flex;
  gap: 40px;
  color: ${({ theme }) => theme.colors.font_black};
`;
