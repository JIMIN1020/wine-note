import React from 'react';
import styled from 'styled-components';
import Flag from '../../common/Flag';

interface TopCountryProps {
  isTop: boolean;
  rank: 1 | 2 | 3;
  country: string;
  count: number;
}

const TopCountry = ({ isTop, rank, country, count }: TopCountryProps) => {
  return (
    <Container $isTop={isTop}>
      <Rank>{rank}위</Rank>
      <Wrapper>
        <Flag countryName={country} size='36px' />
        <h5>{country}</h5>
        <span>{count}개</span>
      </Wrapper>
    </Container>
  );
};

export default TopCountry;

const Container = styled.div<{ $isTop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ $isTop }) => ($isTop ? 0 : 30)}px;
  gap: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & h5 {
    color: ${({ theme }) => theme.colors.font_black};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
  }

  & span {
    color: ${({ theme }) => theme.colors.font_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const Rank = styled.span`
  padding: 6px 14px;
  border: 2px solid ${({ theme }) => theme.colors.wine_purple};
  color: ${({ theme }) => theme.colors.wine_purple};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  border-radius: 12px;
`;
