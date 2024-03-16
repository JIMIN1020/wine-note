import React from 'react';
import styled from 'styled-components';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

type ReviewBoxProps = {
  step: number;
};

const ReviewBox = ({ step }: ReviewBoxProps) => {
  return (
    <Container>
      <Wrapper $step={step}>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
      </Wrapper>
    </Container>
  );
};

export default ReviewBox;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 70px 0px;
  overflow: hidden;
`;

const Wrapper = styled.div<{ $step: number }>`
  width: fit-content;
  height: 100%;
  display: flex;
  background-color: #efefef;
  transform: translate(${({ $step }) => `-${($step - 1) * 720}px`});
  transition: all 0.3s ease-in-out;
`;
