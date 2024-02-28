import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/wineReview/TitleBox';
import ReviewBox from '../components/wineReview/ReviewBox';

const WineReview: React.FC = () => {
  return (
    <Container>
      <TitleBox />
      <ReviewBox />
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
