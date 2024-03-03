import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/wineReview/TitleBox';
import Content from '../components/wineReview/Content';

const WineReview: React.FC = () => {
  return (
    <Container>
      <TitleBox />
      <Content />
    </Container>
  );
};

export default WineReview;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
  display: flex;
  flex-direction: column;
`;
