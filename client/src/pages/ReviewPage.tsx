import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/review/SideBar';
import ButtonBar from '../components/review/ButtonBar';
import ReviewBox from '../components/review/ReviewBox';

const ReviewPage = () => {
  return (
    <Container>
      <SideBar />
      <ReviewBox />
      <ButtonBar />
    </Container>
  );
};

export default ReviewPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
