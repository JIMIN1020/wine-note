import React from 'react';
import styled from 'styled-components';

interface StepSubTitleProps {
  title: string;
}

const StepSubTitle = ({ title }: StepSubTitleProps) => {
  return <Title>{title}</Title>;
};

export default StepSubTitle;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;
