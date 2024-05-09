import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/analysis/TitleBox';
import ReportBox from '../components/analysis/ReportBox';

const AnalysisPage = () => {
  return (
    <Container>
      <TitleBox />
      <ReportBox />
    </Container>
  );
};

export default AnalysisPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text_white};
  display: flex;
  flex-direction: column;
`;
