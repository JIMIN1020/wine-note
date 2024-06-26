import React from 'react';
import styled from 'styled-components';
import Flag from '../../common/Flag';
import { SiVivino } from 'react-icons/si';
import { IoStar } from 'react-icons/io5';
import { WineDataType } from '../../../types/wineType';
import { useNavigate } from 'react-router-dom';

interface WineResultBoxProps {
  wine: WineDataType;
}

const WineResultBox = ({ wine }: WineResultBoxProps) => {
  const navigate = useNavigate();

  /* ----- 와인 클릭 시 리뷰 작성 함수 ----- */
  const handleClick = () => {
    navigate('/review', { state: wine });
  };

  return (
    <Wrapper>
      <WineResult onClick={handleClick}>
        <ImageBox>
          <img src={wine.thumb} alt='wineImg' />
        </ImageBox>
        <TextBox>
          <div className='wrapper'>
            <h5>{wine.name}</h5>
            <Country>
              <Flag countryName='usa' size='15px' />
              <span>
                {wine.region}, {wine.country}
              </span>
            </Country>
          </div>

          <Rating>
            <IoStar size={16} />
            <span>{wine.average_rating}</span>
          </Rating>
        </TextBox>
      </WineResult>
      <ExLink href={wine.link} target='_blank'>
        <SiVivino />
        Vivino
      </ExLink>
    </Wrapper>
  );
};

export default WineResultBox;

const Wrapper = styled.div`
  position: relative;
`;

const WineResult = styled.div`
  width: 100%;
  height: 170px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};

  display: flex;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.wine_purple};
  }
`;

const ImageBox = styled.div`
  width: 140px;
  height: 170px;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 140px;
  }
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 10px;

  border-radius: 0 12px 12px 0;
  font-size: ${({ theme }) => theme.fontSize.base};

  & h5 {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    line-height: 130%;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #b82b21;

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }
`;

const ExLink = styled.a`
  background-color: ${({ theme }) => theme.colors.bg_lightgray};

  display: flex;
  gap: 5px;
  padding: 6px 8px;
  border-radius: 8px;

  position: absolute;
  bottom: 10px;
  right: 10px;

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`;
