import React from 'react';
import styled from 'styled-components';
import { defaultWidth } from '../../styles/GlobalStyle';
import WineLife from './statistic/WineLife';
import RatingStat from './statistic/RatingStat';
import CountryStat from './statistic/CountryStat';
import TypeStat from './statistic/TypeStat';
import GrapeStat from './statistic/GrapeStat';

const ReportBox = () => {
  return (
    <Container>
      <Wrapper>
        <ColumnWrapper>
          <WineLife />
          <RatingStat />
          <TypeStat />
        </ColumnWrapper>
        <ColumnWrapper>
          <CountryStat />
          <GrapeStat />
        </ColumnWrapper>
      </Wrapper>
    </Container>
  );
};

export default ReportBox;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white_gray};

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  color: ${({ theme }) => theme.colors.font_black};
`;

const ColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
