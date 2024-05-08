import React from 'react';
import { LuGrape } from 'react-icons/lu';
import StatLayout from '../../layout/StatLayout';
import styled from 'styled-components';
import { PiDotsThreeVerticalLight } from 'react-icons/pi';

function GrapeStat() {
  return (
    <StatLayout icon={<LuGrape size={20} />} title='내가 즐겨마시는 품종'>
      <Wrapper>
        <Top3>
          <NameWrapper>
            <Rank>1</Rank>
            <span>Cabernet Sauvignon</span>
          </NameWrapper>
          <span>24개</span>
        </Top3>
        <Top3>
          <NameWrapper>
            <Rank>2</Rank>
            <span>Cabernet Sauvignon</span>
          </NameWrapper>
          <span>24개</span>
        </Top3>
        <Top3>
          <NameWrapper>
            <Rank>3</Rank>
            <span>Cabernet Sauvignon</span>
          </NameWrapper>
          <span>24개</span>
        </Top3>
        <PiDotsThreeVerticalLight size={40} />
        <Others>
          <Country>
            <Name>
              <span>4.</span>
              <h5>Spain</h5>
            </Name>
            <span>10개</span>
          </Country>
          <Country>
            <Name>
              <span>5.</span>
              <h5>Australia</h5>
            </Name>
            <span>8개</span>
          </Country>
          <Country>
            <Name>
              <span>6.</span>
              <h5>Germany</h5>
            </Name>
            <span>4개</span>
          </Country>
        </Others>
      </Wrapper>
    </StatLayout>
  );
}

export default GrapeStat;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
`;

const Top3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & span {
    color: ${({ theme }) => theme.colors.font_black};
    font-weight: 600;
  }
`;

const Rank = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.wine_purple};
  font-weight: 600;
`;

const Others = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.font_gray};
`;

const Country = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Name = styled.div`
  display: flex;
  gap: 12px;
`;
