import React from 'react';
import styled from 'styled-components';

type StepProps = {
  number: number;
  title: string;
  complete: boolean;
};

const Step = ({ number, title, complete }: StepProps) => {
  return (
    <Container $complete={complete}>
      <StepNum $complete={complete}>{number}</StepNum>
      <StepTitle>
        <small>Step {number}</small>
        <span>{title}</span>
      </StepTitle>
    </Container>
  );
};

export default Step;

const Container = styled.div<{ $complete: boolean }>`
  width: 100%;
  display: flex;
  gap: 12px;
  opacity: ${({ $complete }) => ($complete ? '1' : '0.7')};
  transition: all 0.3s ease-in-out;
`;

const StepNum = styled.div<{ $complete: boolean }>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  border-radius: 50%;
  background-color: ${({ theme, $complete }) =>
    $complete ? theme.colors.bg_white : 'none'};
  border: ${({ theme, $complete }) =>
    $complete ? 'none' : `2px solid ${theme.colors.bg_white}`};
  color: ${({ $complete, theme }) =>
    $complete ? theme.colors.wine_mid_purple : theme.colors.text_white};
`;

const StepTitle = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  & small {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
    letter-spacing: 1px;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;
