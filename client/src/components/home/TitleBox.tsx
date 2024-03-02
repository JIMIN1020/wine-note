import React from 'react';
import styled from 'styled-components';
import { quotes } from '../../assets/wineQuotes';
import Lottie from 'lottie-react';
import grapeLottie from '../../assets/image/grape_lottie.json';
import { defaultWidth } from '../../styles/GlobalStyle';

const TitleBox: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>와인을 기록하고, 내 와인 취향을 분석해보세요!</Title>
        <Quote>
          <h5>{quotes[Math.floor(Math.random() * 15)].line}</h5>
          <span>{quotes[Math.floor(Math.random() * 15)].writer}</span>
        </Quote>
        <LottieWrapper>
          <Lottie animationData={grapeLottie} />
        </LottieWrapper>
      </Wrapper>
    </Container>
  );
};

export default TitleBox;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 80px 50px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
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
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const LottieWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 0px;
  right: 0px;
`;
