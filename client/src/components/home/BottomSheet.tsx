import React, { useState } from 'react';
import styled from 'styled-components';
import { SlArrowUp } from 'react-icons/sl';
import WineBox from '../common/WineBox';

const BottomSheet: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container $open={open}>
      <Arrow $open={open} onClick={() => setOpen((prev) => !prev)}>
        <SlArrowUp />
      </Arrow>
      <TitleWrapper>
        <Title>지민님을 위한 오늘의 추천 와인!</Title>
        <span>지민님이 높은 평점을 준 와인과 비슷한 와인을 찾아봤어요</span>
      </TitleWrapper>
      <WineWrapper>
        <WineBox />
        <WineBox />
        <WineBox />
      </WineWrapper>
    </Container>
  );
};

export default BottomSheet;

const Container = styled.div<{ $open: boolean }>`
  width: 100vw;
  height: 500px;
  border-radius: 60px 60px 0px 0px;
  position: absolute;
  bottom: ${({ $open }) => ($open ? '0px' : '-200px')};
  left: 0;
  background-color: ${({ theme }) => theme.colors.bg_white};
  transition: bottom 0.5s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Arrow = styled.div<{ $open: boolean }>`
  color: ${({ theme }) => theme.colors.font_gray};
  cursor: pointer;

  & svg {
    width: 30px;
    height: 30px;
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.5s ease-in-out;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 12px;

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.font_black};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 600;
`;

const WineWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 70px;
`;
