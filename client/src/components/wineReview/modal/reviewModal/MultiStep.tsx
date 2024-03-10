import React from 'react';
import styled from 'styled-components';
import Step from './Step';
import { GrClose } from 'react-icons/gr';

type MultiStepProps = {
  step: number;
  setOpenModal: (isOpen: boolean) => void;
};

const MultiStep = ({ step, setOpenModal }: MultiStepProps) => {
  return (
    <Container>
      <Wrapper>
        <Title>Tasting Steps</Title>
        <StepContainer>
          <Step number={1} title='와인 정보' complete={step >= 1} />
          <Line $complete={step > 1} />
          <Step number={2} title='와인의 색' complete={step >= 2} />
          <Line $complete={step > 2} />
          <Step number={3} title='와인의 향' complete={step >= 3} />
          <Line $complete={step > 3} />
          <Step number={4} title='와인의 맛' complete={step >= 4} />
          <Line $complete={step > 4} />
          <Step number={5} title='총평' complete={step >= 5} />
        </StepContainer>
      </Wrapper>
      <CancelBtn onClick={() => setOpenModal(false)}>
        <GrClose />
        기록 취소하기
      </CancelBtn>
    </Container>
  );
};

export default MultiStep;

const Container = styled.div`
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.wine_mid_purple};
  color: ${({ theme }) => theme.colors.font_white};

  border-radius: 12px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 600;
  text-align: center;
  border-bottom: 1.5px solid white;
  padding-bottom: 15px;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div<{ $complete: boolean }>`
  width: 2px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  margin-left: 17px;
  opacity: ${({ $complete }) => ($complete ? '1' : '0.7')};
  transition: all 0.3s ease-in-out;
`;

const CancelBtn = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;

  background-color: #ffffff3f;
  color: ${({ theme }) => theme.colors.font_white};
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ffffff54;
  }
`;
