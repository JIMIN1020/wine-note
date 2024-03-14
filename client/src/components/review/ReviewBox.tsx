import React from 'react';
import styled from 'styled-components';

const ReviewBox = () => {
  return <Container>ReviewBox</Container>;
};

export default ReviewBox;

const Container = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;
