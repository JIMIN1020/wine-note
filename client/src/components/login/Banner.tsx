import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { FaWineGlass } from 'react-icons/fa';
import grapeLottie from '../../assets/image/grape_lottie.json';
import { IoMdArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo>
            <FaWineGlass />
            <h1>Wine Note</h1>
          </Logo>
          <Phrase>
            와인을 기록하고,
            <br />내 와인 취향을 분석해보세요!
          </Phrase>
          <Description>
            나만 볼 수 있는 공간에 와인 테이스팅 노트를 기록하고 관리하며, 와인
            취향을 알아볼 수 있어요
          </Description>
          <LookAroundBtn whileTap={{ scale: 0.95 }}>
            둘러보기
            <IoMdArrowForward size={18} style={{ marginBottom: '2px' }} />
          </LookAroundBtn>
        </Content>
        <LottieContainer>
          <LottieWrapper>
            <Lottie animationData={grapeLottie} />
          </LottieWrapper>
        </LottieContainer>
      </Wrapper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 50%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 100px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  gap: 30px;
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.logo};
    font-weight: 700;
    margin-bottom: -3px;
  }

  & svg {
    width: 28px;
    height: 28px;
  }
`;

const Phrase = styled.h2`
  font-size: 34px;
  font-weight: 700;
  line-height: 140%;
`;

const Description = styled.p`
  line-height: 140%;
  color: ${({ theme }) => theme.fontSize.base};
`;

const LottieContainer = styled.div`
  width: 100%;
  height: 380px;
  overflow: hidden;
  position: relative;
`;

const LottieWrapper = styled.div`
  position: absolute;
  bottom: -80px;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  overflow: hidden;
`;

const LookAroundBtn = styled(motion.button)`
  width: 110px;
  color: ${({ theme }) => theme.colors.wine_purple};
  background-color: ${({ theme }) => theme.colors.bg_white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 14px 16px;
  border-radius: 10px;
`;
