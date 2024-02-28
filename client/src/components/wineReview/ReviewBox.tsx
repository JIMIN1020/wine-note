import React from 'react';
import styled from 'styled-components';

const ReviewBox: React.FC = () => {
  return <Container>ReviewBox</Container>;
};

export default ReviewBox;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 25px 25px 0 0;
`;
