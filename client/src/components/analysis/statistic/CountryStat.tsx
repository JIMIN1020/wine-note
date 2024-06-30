import React from 'react';
import StatLayout from '@/components/layout/StatLayout';
import { IoEarth } from 'react-icons/io5';
import styled from 'styled-components';
import TopCountry from './TopCountry';

const CountryStat = () => {
  return (
    <StatLayout icon={<IoEarth size={20} />} title='내가 즐겨마시는 와인 산지'>
      <Container>
        <Top3>
          <TopCountry isTop={false} rank={2} country='France' count={12} />
          <TopCountry
            isTop={true}
            rank={1}
            country='United States'
            count={24}
          />
          <TopCountry isTop={false} rank={3} country='New Zealand' count={10} />
        </Top3>
      </Container>
    </StatLayout>
  );
};

export default CountryStat;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 24px 0;
`;
