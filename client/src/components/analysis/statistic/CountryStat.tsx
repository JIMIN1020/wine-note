import React from 'react';
import StatLayout from '../../layout/StatLayout';
import { IoEarth } from 'react-icons/io5';
import styled from 'styled-components';
import TopCountry from './TopCountry';
import { PiDotsThreeVerticalLight } from 'react-icons/pi';

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
        <PiDotsThreeVerticalLight size={40} />
        <Others>
          <Country>
            <Wrapper>
              <span>4위</span>
              <h5>Spain</h5>
            </Wrapper>
            <span>10개</span>
          </Country>
          <Country>
            <Wrapper>
              <span>5위</span>
              <h5>Australia</h5>
            </Wrapper>
            <span>8개</span>
          </Country>
          <Country>
            <Wrapper>
              <span>6위</span>
              <h5>Germany</h5>
            </Wrapper>
            <span>4개</span>
          </Country>
        </Others>
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

const Others = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.text_gray};
`;

const Country = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;
