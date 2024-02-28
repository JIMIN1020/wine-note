import React from 'react';
import styled from 'styled-components';

const WineAnalysis: React.FC = () => {
  return <Container>Analyzation</Container>;
};

export default WineAnalysis;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.font_white};
`;
