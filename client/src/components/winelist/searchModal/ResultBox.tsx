import React from 'react';
import styled from 'styled-components';
import exImg from '../../../assets/image/exImg.png';
import Flag from '../../common/Flag';
import { SiVivino } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Button from '../../common/Button';

type ResultBoxProps = {
  handleWriteReview: () => void;
};

const ResultBox = ({ handleWriteReview }: ResultBoxProps) => {
  return (
    <Container
      initial={{ height: 0 }}
      animate={{ height: '400px' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <Bar />
      <Title>
        <h3>
          <IoIosCheckmarkCircleOutline
            size='28'
            style={{ strokeWidth: '10px' }}
          />
          검색 결과
        </h3>
        <span>찾으시는 와인이 이 와인인가요?</span>
      </Title>
      <WineResult>
        <ImageBox>
          <img src={exImg} alt='wineImg' />
        </ImageBox>
        <TextBox>
          <h5>Rombauer Vineyards Chardonnay Proprietor Selection 2022</h5>
          <Country>
            <Flag countryName='usa' size='15px' />
            <span>California, United States</span>
          </Country>
          <span>Chardonnay 100%</span>
        </TextBox>
        <ExLink to='/'>
          <SiVivino />
          Vivino
        </ExLink>
      </WineResult>
      <BtnWrapper>
        <Button
          text='기록 시작하기'
          disabled={false}
          onClick={handleWriteReview}
        />
      </BtnWrapper>
    </Container>
  );
};

export default ResultBox;

const Container = styled(motion.div)`
  width: 100%;
  height: 0;
  border-radius: 0 0 12px 12px;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.bg_white};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 2px;
  width: 100%;
  margin: 20px 0px;
  background-color: ${({ theme }) => theme.colors.border_gray};
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 8px;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & span {
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.font_gray};
  }
`;

const WineResult = styled.div`
  width: 100%;
  height: 170px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};

  display: flex;
  position: relative;
`;

const ImageBox = styled.div`
  width: 140px;
  height: 170px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0 0 12px;

  & img {
    height: 140px;
  }
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 10px;

  border-radius: 0 12px 12px 0;
  font-size: ${({ theme }) => theme.fontSize.base};

  & h5 {
    font-weight: 600;
    line-height: 130%;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
`;

const ExLink = styled(Link)`
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
