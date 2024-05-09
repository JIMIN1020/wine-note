import React from 'react';
import styled from 'styled-components';

interface StatBoxProps {
  name: string;
  value: string;
}

const StatBox = ({ name, value }: StatBoxProps) => {
  return (
    <Box>
      <h5>{value}</h5>
      <span>{name}</span>
    </Box>
  );
};

export default StatBox;

const Box = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & h5 {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
  }
`;
