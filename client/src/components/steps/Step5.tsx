import React from 'react';
// import styled from 'styled-components';
import { StepContainer } from '../../styles/GlobalStyle';
import StepTitle from './StepTitle';
import Rating from './step5/Rating';
import Conclusion from './step5/Conclusion';

const Step5 = () => {
  return (
    <StepContainer>
      <StepTitle
        stepNum={5}
        title='총평'
        description='이 와인에 대해 평가해주세요!'
      />
      <Rating />
      <Conclusion />
    </StepContainer>
  );
};

export default Step5;
