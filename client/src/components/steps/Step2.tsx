import React from 'react';
import StepTitle from './StepTitle';
import { StepContainer } from '../../styles/GlobalStyle';
import styled from 'styled-components';
import ColorInfo from './step2/ColorInfo';
import IntensityInfo from './step2/IntensityInfo';

const Step2 = () => {
  return (
    <StepContainer>
      <StepTitle
        stepNum={2}
        title='와인의 색'
        description='와인의 색에 대해 평가해보세요.'
      />
      <Content>
        <ColorInfo />
        <IntensityInfo />
      </Content>
    </StepContainer>
  );
};

export default Step2;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
