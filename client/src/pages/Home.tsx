import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/home/TitleBox';
import Lottie from 'lottie-react';
import grapeLottie from '../assets/image/grape_lottie.json';

const Home: React.FC = () => {
  return (
    <Container>
      <TitleBox />
      <LottieWrapper>
        <Lottie animationData={grapeLottie} />
      </LottieWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
  padding: 80px 0px;
  position: relative;
`;

const LottieWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 40px;
  right: -10px;
`;
