import React from 'react';
import styled from 'styled-components';

const WineBox: React.FC = () => {
  return <Container>WineBox</Container>;
};

export default WineBox;

const Container = styled.div`
  width: 210px;
  height: 280px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 40px 0px;
`;
