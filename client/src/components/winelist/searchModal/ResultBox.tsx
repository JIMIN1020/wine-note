import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { WineDataType } from '../../../types/wineType';

import WineResultBox from './WineResultBox';

type ResultBoxProps = {
  wineData: WineDataType[] | undefined;
};

const ResultBox = ({ wineData }: ResultBoxProps) => {
  return (
    <Container
      initial={{ height: 0 }}
      animate={{ height: '700px' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <Bar />
      <Title>
        <h3>
          <IoIosCheckmarkCircleOutline
            size='28'
            style={{ strokeWidth: '10px' }}
          />
          검색 결과
        </h3>
        <span>찾으시는 와인이 이 와인인가요?</span>
      </Title>
      <WineList>
        {wineData?.map((wine, i) => {
          return <WineResultBox key={i} wine={wine} />;
        })}
      </WineList>
    </Container>
  );
};

export default ResultBox;

const Container = styled(motion.div)`
  width: 100%;
  height: 0;
  border-radius: 0 0 12px 12px;
  padding: 0px 50px 50px 50px;
  background-color: ${({ theme }) => theme.colors.bg_white};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  overflow: hidden;
`;

const WineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Bar = styled.hr`
  height: 2px;
  width: 100%;
  margin: 20px 0px;
  background-color: ${({ theme }) => theme.colors.border_gray};
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 8px;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & span {
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.text_gray};
  }
`;
