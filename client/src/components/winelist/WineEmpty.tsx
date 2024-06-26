import React from 'react';
import { MdOutlineWineBar } from 'react-icons/md';
import styled from 'styled-components';

const WineEmpty = () => {
  return (
    <Container>
      <MdOutlineWineBar size={50} />
      <span>와인이 없어요..</span>
    </Container>
  );
};

export default WineEmpty;

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: ${({ theme }) => theme.colors.text_gray};

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
  }
`;
