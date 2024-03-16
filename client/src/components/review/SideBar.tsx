import React from 'react';
import styled from 'styled-components';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import MultiStep from './steps/MultiStep';

type SideBarProps = {
  step: number;
};

const SideBar = ({ step }: SideBarProps) => {
  return (
    <Container>
      <TitleBox>
        <h2>
          <HiOutlinePencilAlt />
          와인 기록 중...
        </h2>
        <span>절차에 맞게 와인을 테이스팅하고, 기록해보세요</span>
      </TitleBox>
      <StepContainer>
        <MultiStep step={step} />
      </StepContainer>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  padding: 70px;
  color: ${({ theme }) => theme.colors.font_white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.logo};
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-left: 38px;
  }

  & svg {
    width: 30px;
    height: 30px;
  }
`;

const StepContainer = styled.div`
  display: flex;
`;
