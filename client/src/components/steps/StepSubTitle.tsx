import React from 'react';
import styled from 'styled-components';

interface StepSubTitleProps {
  title: string;
}

const StepSubTitle = ({ title }: StepSubTitleProps) => {
  return (
    <Wrapper>
      <Line />
      <Title>{title}</Title>
      <Line />
    </Wrapper>
  );
};

export default StepSubTitle;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: black;
`;
