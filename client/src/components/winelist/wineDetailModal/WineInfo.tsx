import React from 'react';
import styled from 'styled-components';
import Flag from '../../common/Flag';
import { BiWon } from 'react-icons/bi';
import RatingStar from './RatingStar';
import { LuLink, LuGrape } from 'react-icons/lu';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { WINE_TYPE } from '../../../constants/wineType';
import WineBottle from '../../../assets/image/wine-bottle.svg';
import { useWine } from '@/hooks/useWine';

const WineInfo = () => {
  const { wineDetailData } = useWine();
  const formatGrapes = (grapes: { name: string; percent: number }[]) => {
    return grapes.length === 1 && grapes[0].name === ''
      ? '-'
      : grapes.map((grape) => `${grape.name} ${grape.percent}%`).join(', ');
  };

  return (
    <WineContainer>
      <WineImgBox>
        <img src={wineDetailData!.wine.img || WineBottle} alt='wine' />
      </WineImgBox>
      <Content>
        <SmallHead>
          <span>{WINE_TYPE[wineDetailData!.wine.type].label}</span> •{' '}
          {wineDetailData!.review.created_at.split(' ')[0]}
        </SmallHead>
        <WineName>{wineDetailData!.wine.name}</WineName>
        <Rating>
          <h3>{wineDetailData!.review.rating.toFixed(1)}</h3>
          <RatingStar rating={wineDetailData!.review.rating} />
        </Rating>
        <DetailWrapper>
          <Country>
            <Flag
              countryName={wineDetailData!.wine.country || ''}
              size='18px'
            />
            <span>
              {wineDetailData!.wine.region}, {wineDetailData!.wine.country}
            </span>
          </Country>
          <Grapes>
            <LuGrape size={18} />
            <span>{formatGrapes(wineDetailData!.wine.grapes)}</span>
          </Grapes>

          <Vintage>
            <MdOutlineCalendarMonth size={20} />
            <span>{wineDetailData!.wine.vintage} Vintage</span>
          </Vintage>
          <Price>
            <BiWon size={20} />
            <span>{wineDetailData!.wine.price.toLocaleString()}</span>
          </Price>

          <VivinoLink href={wineDetailData!.wine.url} target='_blank'>
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

const SmallHead = styled.div`
  display: flex;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_gray};

  & span {
    text-decoration: underline;
  }
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
  color: ${({ theme }) => theme.colors.text_darkgray};
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
  color: ${({ theme }) => theme.colors.text_gray};
`;

const Grapes = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Vintage = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
`;
