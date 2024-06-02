import React from 'react';
import styled from 'styled-components';
import Flag from './Flag';
import { IoStar } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { WineListItem } from '../../types/api/response';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import WineBottle from '../../assets/image/wine-bottle.svg';

interface WineProps {
  wineData: WineListItem;
  onClick: () => void;
  layoutId?: string;
}

const Wine = ({ wineData, onClick, layoutId }: WineProps) => {
  return (
    <Container onClick={onClick} layoutId={layoutId} whileHover={{ y: -10 }}>
      <ImgBox>
        <img src={wineData.img || WineBottle} alt='wine' />
      </ImgBox>
      <TextContent>
        <WineName>{wineData.name}</WineName>
        <Country>
          <Flag countryName={wineData.country} size='15px' />
          <span>
            {wineData.region}, {wineData.country}
          </span>
        </Country>
        <Price>
          <MdOutlineCalendarMonth />
          <span>
            <strong>{wineData.vintage}</strong> Vintage
          </span>
        </Price>
      </TextContent>
      <Rating>
        <IoStar />
        {wineData.rating.toFixed(1)}
      </Rating>
    </Container>
  );
};

export default Wine;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: fit-content;
  padding: 14px 0;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  box-shadow: ${({ theme }) => theme.shadow.basic};
  color: ${({ theme }) => theme.colors.text_black};
  position: relative;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 230px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  & img {
    height: 210px;
    border-radius: 12px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const WineName = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  line-height: 130%;
  word-break: break-all;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.colors.text_black};
  }

  & strong {
    font-weight: 500;
  }
`;

const Rating = styled.div`
  width: 55px;
  height: 22px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  left: 10px;

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_white};
  background-color: ${({ theme }) => theme.colors.wine_purple};
  border-radius: 14px;

  & svg {
    width: 12px;
    height: 12px;
  }
`;
