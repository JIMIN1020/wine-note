import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/wineAnalysis/TitleBox';
import ReportBox from '../components/wineAnalysis/ReportBox';

const WineAnalysis: React.FC = () => {
  return (
    <Container>
      <TitleBox />
      <ReportBox />
    </Container>
  );
};

export default WineAnalysis;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
  display: flex;
  flex-direction: column;
`;
