import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/home/TitleBox';

import BottomSheet from '../components/home/BottomSheet';

const HomePage = () => {
  return (
    <Container>
      <TitleBox />
      <BottomSheet />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
`;
