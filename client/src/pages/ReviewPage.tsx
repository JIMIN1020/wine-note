import React from 'react';
import styled from 'styled-components';

const ReviewPage = () => {
  return (
    <Container>
      <SideBanner></SideBanner>
      <ReviewBox></ReviewBox>
      <NextBar></NextBar>
    </Container>
  );
};

export default ReviewPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SideBanner = styled.div`
  height: 100%;
  width: 600px;
`;

const ReviewBox = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const NextBar = styled.div`
  height: 100%;
  width: 200px;
`;
