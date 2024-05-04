import React from 'react';
import StatLayout from '../../layout/StatLayout';
import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';
import StatBox from './StatBox';

const RatingStat = () => {
  return (
    <StatLayout icon={<IoStar size={20} />} title='내가 준 별점' height={400}>
      <Wrapper>
        <ChartContainer>d</ChartContainer>
        <StatWrapper>
          <StatBox name='평균 별점' value='3.5점' />
          <StatBox name='최고 별점' value='5점' />
          <StatBox name='최저 별점' value='2.5점' />
        </StatWrapper>
      </Wrapper>
    </StatLayout>
  );
};

export default RatingStat;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  width: 100%;
  flex: 1;
`;

const StatWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
