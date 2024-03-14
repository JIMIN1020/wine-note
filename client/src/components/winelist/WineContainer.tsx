import React from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import WineBox from './WineBox';

const WineContainer: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Total>총 12개의 와인 기록이 있습니다.</Total>
        <CustomSelect />
      </TopBar>
      <WineBox />
    </Container>
  );
};

export default WineContainer;

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopBar = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Total = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 5px;
`;
