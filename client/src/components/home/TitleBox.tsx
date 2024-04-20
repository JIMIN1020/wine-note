import React from 'react';
import styled from 'styled-components';
import { quotes } from '../../assets/wineQuotes';
import Lottie from 'lottie-react';
import grapeLottie from '../../assets/image/grape_lottie.json';
import { defaultWidth } from '../../styles/GlobalStyle';
import { Link } from 'react-router-dom';
import { BiArchive, BiChart } from 'react-icons/bi';

const TitleBox: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Quote>
          <h5>{quotes[Math.floor(Math.random() * 15)].line}</h5>
          <span>{quotes[Math.floor(Math.random() * 15)].writer}</span>
        </Quote>
        <ButtonWrapper>
          <Button to='/winelist'>
            <BiArchive />
            와인 기록
          </Button>
          <Button to='/analysis'>
            <BiChart />
            취향 분석
          </Button>
        </ButtonWrapper>
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
  background-color: ${({ theme }) => theme.colors.wine_purple};
  border-radius: 0 0 100px 100px;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 80px 50px 100px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  position: relative;
`;

const Quote = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & h5 {
    font-size: 36px;
    font-weight: 600;
    line-height: 140%;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-style: italic;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const Button = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 20px 30px;
  background-color: #a2a2a23c;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #a2a2a251;
  }
`;

const LottieWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 0px;
  right: 0px;
`;
