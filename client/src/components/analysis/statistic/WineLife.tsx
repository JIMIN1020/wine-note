import React from 'react';
import styled from 'styled-components';
import { FaWineGlassAlt } from 'react-icons/fa';
import StatLayout from '../../layout/StatLayout';
import StatBox from './StatBox';

const WineLife = () => {
  return (
    <StatLayout icon={<FaWineGlassAlt size={20} />} title='나의 와인 생활'>
      <Wrapper>
        <StatBox name='마신 와인 수' value='19개' />
        <StatBox name='평균 와인 소비 주기' value='2.5일 마다' />
        <StatBox name='평균 구매 금액' value='78,000원' />
      </Wrapper>
    </StatLayout>
  );
};

export default WineLife;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
