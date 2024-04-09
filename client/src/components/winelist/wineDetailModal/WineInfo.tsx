import React from 'react';
import styled from 'styled-components';
import exImg from '../../../assets/image/exImg.png';
import Flag from '../../common/Flag';
import { BiWon } from 'react-icons/bi';
import RatingStar from './RatingStar';
import { LuLink, LuGrape } from 'react-icons/lu';

const WineInfo = () => {
  return (
    <WineContainer>
      <WineImgBox>
        <img src={exImg} alt='wine' />
      </WineImgBox>
      <Content>
        <TypeOfWine>화이트 와인</TypeOfWine>
        <WineName>
          Rombauer Vineyards Chardonnay Proprietor Selection 2022
        </WineName>
        <Rating>
          <h3>4.5</h3>
          <RatingStar rating={4.5} />
        </Rating>
        <DetailWrapper>
          <Country>
            <Flag countryName='usa' size='18px' />
            <span>California, United States</span>
          </Country>
          <Grapes>
            <LuGrape size={18} />
            <span>Cabernnet Sauvignon 50%, Shiraz 50%</span>
          </Grapes>
          <Price>
            <BiWon size={20} />
            <span>127,000</span>
          </Price>
          <VivinoLink
            href='https://www.vivino.com/US-CA/en/beau-vigne-owner-s-reserve-guest-cottage-cabernet-sauvignon/w/2131484?year=2021&price_id=35204260'
            target='_blank'
          >
            <LuLink size={18} />
            Vivino
          </VivinoLink>
        </DetailWrapper>
      </Content>
    </WineContainer>
  );
};

export default WineInfo;

const WineContainer = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 12px;
  display: flex;
  gap: 30px;
`;

const WineImgBox = styled.div`
  width: fit-content;
  min-width: 220px;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 100%;
    border-radius: 12px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
`;

const TypeOfWine = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.font_gray};
  text-decoration: underline;
`;

const WineName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.5px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.colors.font_darkgray};
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Rating = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
  margin: 10px 0;

  & h3 {
    font-size: 48px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.wine_purple};
  }
`;

const VivinoLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font_gray};
`;

const Grapes = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
`;
