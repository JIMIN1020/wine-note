import React from 'react';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import styled from 'styled-components';

interface RatingStarProps {
  rating: number;
}

const RatingStar = ({ rating }: RatingStarProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<ImStarFull key={i} />);
      } else if (rating > i) {
        stars.push(<ImStarHalf key={i} />);
      } else {
        stars.push(<ImStarEmpty key={i} />);
      }
    }
    return stars;
  };
  return (
    <Container>
      <Title>나의 평점</Title>
      <StarWrapper>{renderStars()}</StarWrapper>
    </Container>
  );
};

export default RatingStar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;

  & svg {
    fill: ${({ theme }) => theme.colors.wine_purple};
  }
`;

const StarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.font_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
