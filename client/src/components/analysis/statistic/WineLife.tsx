import React from 'react';
import styled from 'styled-components';
import { FaWineGlassAlt } from 'react-icons/fa';
import StatLayout from '../../layout/StatLayout';

const WineLife = () => {
  return (
    <StatLayout icon={<FaWineGlassAlt size={20} />} title='나의 와인 생활'>
      <Wrapper>
        <Box>
          <h5>19개</h5>
          <span>마신 와인 수</span>
        </Box>
        <Box>
          <h5>2.5일</h5>
          <span>평균 와인 소비 주기</span>
        </Box>
        <Box>
          <h5>78,000원</h5>
          <span>평균 구매 금액</span>
        </Box>
      </Wrapper>
    </StatLayout>
  );
};

export default WineLife;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & h5 {
    color: ${({ theme }) => theme.colors.font_black};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
  }

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
  }
`;
