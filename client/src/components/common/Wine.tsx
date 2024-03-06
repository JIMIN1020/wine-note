import React from 'react';
import styled from 'styled-components';
import exImg from '../../assets/image/exImg.png';
import Flag from './Flag';
import { BiWon } from 'react-icons/bi';
import { IoStar } from 'react-icons/io5';

const Wine = () => {
  return (
    <Container>
      <ImgBox>
        <img src={exImg} alt='wine' />
      </ImgBox>
      <TextContent>
        <WineName>
          Rombauer Vineyards Chardonnay Proprietor Selection 2022
        </WineName>
        <Country>
          <Flag countryName='usa' />
          <span>California, United States</span>
        </Country>
        <Price>
          <BiWon />
          <span>127,000</span>
        </Price>
      </TextContent>
      <Rating>
        <IoStar />
        4.5
      </Rating>
    </Container>
  );
};

export default Wine;

const Container = styled.div`
  width: 220px;
  height: 350px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 40px 0px;
  color: ${({ theme }) => theme.colors.font_black};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: calc(1.05);
  }
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
    color: ${({ theme }) => theme.colors.font_black};
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
  color: ${({ theme }) => theme.colors.font_white};
  background-color: ${({ theme }) => theme.colors.wine_purple};
  border-radius: 14px;

  & svg {
    width: 12px;
    height: 12px;
  }
`;