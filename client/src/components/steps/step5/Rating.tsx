import React, { useState } from 'react';
import styled from 'styled-components';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import { useFormContext } from 'react-hook-form';
import SubFormLayout from '@/components/layout/SubFormLayout';
import uuid from 'react-uuid';

const Rating = () => {
  const { setValue } = useFormContext();
  const [score, setScore] = useState<number>(0);
  const [scoreFixed, setScoreFixed] = useState(score);

  const handleLeftEnter = (i: number) => setScore(i + 0.5);
  const handleRightEnter = (i: number) => setScore(i + 1);

  const handleStarClick = () => {
    setScoreFixed(score);
    setValue('step5[rating]', score);
  };

  const handleStarLeave = () => {
    if (score !== scoreFixed) {
      setScore(scoreFixed);
    }
  };

  return (
    <SubFormLayout title='나의 평점'>
      <RatingScore>{score}점</RatingScore>
      <StarContainer>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <StarWrapper key={i} onClick={handleStarClick}>
              {score - Math.floor(score) === 0.5 && Math.floor(score) === i ? (
                <ImStarHalf
                  key={uuid()}
                  style={{ position: 'absolute' }}
                  size={55}
                />
              ) : i + 1 > score ? (
                <ImStarEmpty
                  key={uuid()}
                  style={{ position: 'absolute' }}
                  size={55}
                />
              ) : (
                <ImStarFull
                  key={uuid()}
                  style={{ position: 'absolute' }}
                  size={55}
                />
              )}
              <LeftDiv
                key={uuid()}
                onMouseEnter={() => handleLeftEnter(i)}
                onMouseLeave={handleStarLeave}
              />
              <RightDiv
                key={uuid()}
                onMouseEnter={() => handleRightEnter(i)}
                onMouseLeave={handleStarLeave}
              />
            </StarWrapper>
          ))}
      </StarContainer>
    </SubFormLayout>
  );
};

export default Rating;

const StarContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const RatingScore = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.wine_purple};
  font-weight: 700;
`;

const StarWrapper = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  display: flex;
  cursor: pointer;

  & svg {
    color: ${({ theme }) => theme.colors.wine_purple};
  }
`;

const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  z-index: 100;
`;

const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  z-index: 100;
`;
