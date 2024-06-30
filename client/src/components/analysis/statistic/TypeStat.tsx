import React from 'react';
import StatLayout from '@/components/layout/StatLayout';
import { FaChartPie } from 'react-icons/fa';
import styled from 'styled-components';
import DoughnutChart from '@/components/chart/DoughnutChart';
import { useQuery } from '@tanstack/react-query';
import { analysisAPI } from '@/apis/api/analysis';

const TypeStat = () => {
  const { data } = useQuery({
    queryKey: ['typeStat'],
    queryFn: async () => {
      return await analysisAPI.getTypeStatistics();
    },
  });

  if (!data) return null;

  return (
    <StatLayout
      icon={<FaChartPie size={20} />}
      title='내가 즐겨마시는 와인 종류'
    >
      <ChartContainer>
        <DoughnutChart typeData={data} />
      </ChartContainer>
    </StatLayout>
  );
};

export default TypeStat;

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 24px;
`;
