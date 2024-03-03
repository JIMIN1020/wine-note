import React from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';

const WineContainer: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Total>총 12개의 와인 기록이 있습니다.</Total>
        <CustomSelect />
      </TopBar>
    </Container>
  );
};

export default WineContainer;

const Container = styled.div`
  flex: 1;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Total = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 5px;
`;
