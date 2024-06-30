import React from 'react';
import StatLayout from '@/components/layout/StatLayout';
import { IoEarth } from 'react-icons/io5';
import styled from 'styled-components';
import TopCountry from './TopCountry';
import { useCountryStat } from '@/hooks/useCountryStat';

const CountryStat = () => {
  const { top3 } = useCountryStat();

  if (top3.length === 0) return null;

  return (
    <StatLayout icon={<IoEarth size={20} />} title='내가 즐겨마시는 와인 산지'>
      <Container>
        <Top3>
          {top3.length >= 2 && (
            <TopCountry
              key={top3[1].country}
              isTop={false}
              rank={2}
              country={top3[1].country}
              count={top3[1].count}
            />
          )}
          <TopCountry
            key={top3[0].country}
            isTop={true}
            rank={1}
            country={top3[0].country}
            count={top3[0].count}
          />
          {top3.length === 3 && (
            <TopCountry
              key={top3[2].country}
              isTop={false}
              rank={3}
              country={top3[2].country}
              count={top3[2].count}
            />
          )}
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
