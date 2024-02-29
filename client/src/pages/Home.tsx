import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/home/TitleBox';
import Lottie from 'lottie-react';
import grapeLottie from '../assets/image/grape_lottie.json';
import BottomSheet from '../components/home/BottomSheet';

const Home: React.FC = () => {
  return (
    <Container>
      <TitleBox />
      <LottieWrapper>
        <Lottie animationData={grapeLottie} />
      </LottieWrapper>
      <BottomSheet />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
  padding: 80px;
  position: relative;
  overflow: hidden;
`;

const LottieWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 40px;
  right: 60px;
`;
