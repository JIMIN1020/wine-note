import React from 'react';
import styled from 'styled-components';
import Step from './Step';

type MultiStepProps = {
  step: number;
};

const MultiStep = ({ step }: MultiStepProps) => {
  return (
    <Container>
      <Title>Tasting Steps</Title>
      <StepContainer>
        <Step number={1} title='와인 정보' complete={step >= 1} />
        <Line />
        <Step number={2} title='와인의 색' complete={false} />
        <Line />
        <Step number={3} title='와인의 향' complete={false} />
        <Line />
        <Step number={4} title='와인의 맛' complete={false} />
        <Line />
        <Step number={5} title='총평' complete={false} />
      </StepContainer>
    </Container>
  );
};

export default MultiStep;

const Container = styled.div`
  width: 250px;
  height: 100%;
  /* background-color: ${({ theme }) => theme.colors.wine_purple}; */
  background-color: #46007bb3;
  color: ${({ theme }) => theme.colors.font_white};

  border-radius: 12px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 600;
  text-align: center;
  border-bottom: 1.5px solid white;
  padding-bottom: 15px;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 2px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  margin-left: 17px;
`;
