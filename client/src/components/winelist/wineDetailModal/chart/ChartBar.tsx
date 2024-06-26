import React from 'react';
import styled from 'styled-components';

interface ChartBarProps {
  left: string;
  right: string;
  num: number;
}

const ChartBar = ({ left, right, num }: ChartBarProps) => {
  return (
    <Container>
      <Label style={{ textAlign: 'end' }}>{left}</Label>
      <RangeBar>
        <Bar $num={num} />
      </RangeBar>
      <Label style={{ textAlign: 'start' }}>{right}</Label>
    </Container>
  );
};

export default ChartBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Label = styled.p`
  width: 10%;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_black};
`;

const RangeBar = styled.div`
  width: 80%;
  height: 10px;
  border-radius: 12px;
  background-color: #e7e7e7;
  position: relative;
`;

const Bar = styled.div<{ $num: number }>`
  height: 100%;
  width: 20%;
  position: absolute;
  top: 0;
  left: ${({ $num }) => ($num - 1) * 20}%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.wine_purple};
`;
