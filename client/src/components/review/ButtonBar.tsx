import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const ButtonBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <CancelBtn type='button' onClick={() => navigate('/winelist')}>
        <IoMdClose size={28} />
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
  align-items: flex-end;
  padding: 60px 40px;
`;

const CancelBtn = styled.button`
  padding: 12px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.font_white};
  cursor: pointer;
  border-radius: 50%;
  background-color: #ffffff22;

  display: flex;
  gap: 10px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #ffffff2d;
  }
`;
