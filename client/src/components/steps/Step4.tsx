import React from 'react';
import { StepContainer } from '../../styles/GlobalStyle';
import StepTitle from './StepTitle';
import Characteristics from './step4/Characteristics';
import FlavorTextarea from './step4/FlavorTextarea';

const Step4 = () => {
  return (
    <StepContainer>
      <StepTitle
        stepNum={4}
        title='와인의 맛'
        description='와인의 맛에 대해 평가해보세요'
      />
      <Characteristics />
      <FlavorTextarea />
    </StepContainer>
  );
};

export default Step4;
