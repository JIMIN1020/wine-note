import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

type ButtonBarProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonBar = ({ setStep }: ButtonBarProps) => {
  return (
    <Container>
      <CancelBtn>
        기록 취소 <GrClose />
      </CancelBtn>
      <button onClick={() => setStep((prev) => prev + 1)}>next</button>
    </Container>
  );
};

export default ButtonBar;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 50px;
`;

const CancelBtn = styled.button`
  padding: 10px 16px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.font_white};
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff22;

  display: flex;
  gap: 10px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #ffffff2d;
  }
`;
