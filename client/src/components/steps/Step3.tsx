import React from 'react';
import styled from 'styled-components';
import StepTitle from './StepTitle';
import AromaIntensity from './step3/AromaIntensity';
import { StepContainer } from '../../styles/GlobalStyle';
import AromaTextarea from './step3/AromaTextarea';

const Step3 = () => {
  return (
    <StepContainer>
      <StepTitle
        stepNum={3}
        title='와인의 향'
        description='와인의 향에 대해 평가해보세요.'
      />
      <Content>
        <AromaIntensity />
        <AromaTextarea />
      </Content>
    </StepContainer>
  );
};

export default Step3;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
