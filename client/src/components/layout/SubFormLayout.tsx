import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../steps/StepSubTitle';

interface SubFormLayoutProps {
  children: React.ReactNode;
  title: string;
}

const SubFormLayout = ({ children, title }: SubFormLayoutProps) => {
  return (
    <Container>
      <StepSubTitle title={title} />
      {children}
    </Container>
  );
};

export default SubFormLayout;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
