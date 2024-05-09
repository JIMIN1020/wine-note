import React from 'react';
import styled from 'styled-components';

type StepTitleProps = {
  stepNum: number;
  title: string;
  description: string;
};

const StepTitle = ({ stepNum, title, description }: StepTitleProps) => {
  return (
    <TitleBox>
      <StepNum>{stepNum}</StepNum>
      <h2>{title}</h2>
      <span>{description}</span>
    </TitleBox>
  );
};

export default StepTitle;

const StepNum = styled.div`
  width: 35px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.text_white};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
