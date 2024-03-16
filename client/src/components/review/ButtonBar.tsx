import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

const ButtonBar = () => {
  return (
    <Container>
      <CancelBtn>
        <GrClose />
      </CancelBtn>
    </Container>
  );
};

export default ButtonBar;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 70px 50px;
  position: relative;
`;

const CancelBtn = styled.button`
  padding: 16px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.font_white};
  cursor: pointer;
  border-radius: 50%;
  background-color: #ffffff22;
  position: absolute;
  top: 70px;
  right: 40px;

  display: flex;
  gap: 10px;
  transition: all 0.1s ease-in-out;

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #ffffff2d;
  }
`;
