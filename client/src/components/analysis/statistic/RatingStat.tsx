import React from 'react';
import StatLayout from '@/components/layout/StatLayout';
import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';
import StatBox from './StatBox';
import RatingChart from '@/components/chart/RatingChart';
import { useQuery } from '@tanstack/react-query';
import { analysisAPI } from '@/apis/api/analysis';

const RatingStat = () => {
  const { data } = useQuery({
    queryKey: ['raitngStat'],
    queryFn: async () => {
      return await analysisAPI.getRatingStatistics();
    },
  });

  if (!data) return null;

  return (
    <StatLayout icon={<IoStar size={20} />} title='내가 준 별점'>
      <Wrapper>
        <ChartContainer>
          <RatingChart ratings={data.ratings} />
        </ChartContainer>
        <StatWrapper>
          <StatBox name='최저 별점' value={`${data?.minRating}점`} />
          <StatBox name='최고 별점' value={`${data?.maxRating}점`} />
          <StatBox name='평균 별점' value={`${data?.avgRating}점`} />
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
  height: 270px;
  padding-top: 24px;
`;

const StatWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
