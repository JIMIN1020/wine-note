import React from 'react';
import styled from 'styled-components';
import { quotes } from '../../assets/wineQuotes';

const TitleBox: React.FC = () => {
  return (
    <Container>
      <Title>와인을 기록하고, 내 와인 취향을 분석해보세요!</Title>
      <Quote>
        <h5>{quotes[Math.floor(Math.random() * 15)].line}</h5>
        <span>{quotes[Math.floor(Math.random() * 15)].writer}</span>
      </Quote>
    </Container>
  );
};

export default TitleBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

const Quote = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & h5 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
