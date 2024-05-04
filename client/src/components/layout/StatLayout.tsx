import React from 'react';
import styled from 'styled-components';

interface StatLayoutProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  height: number;
}

const StatLayout = ({ children, icon, title, height }: StatLayoutProps) => {
  return (
    <Container $height={height}>
      <TitleBar>
        {icon}
        <h3>{title}</h3>
      </TitleBar>
      {children}
    </Container>
  );
};

export default StatLayout;

const Container = styled.div<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => $height}px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border_lightgray};

  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.font_black};

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
  }
`;
