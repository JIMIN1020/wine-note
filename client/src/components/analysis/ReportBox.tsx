import React from 'react';
import styled from 'styled-components';
import { defaultWidth } from '../../styles/GlobalStyle';
import WineLife from './statistic/WineLife';

const ReportBox = () => {
  return (
    <Container>
      <Wrapper>
        <ColumnWrapper>
          <WineLife />
          <Box2>별점 통계</Box2>
          <Box4>선호하는 와인 종류</Box4>
        </ColumnWrapper>
        <ColumnWrapper>
          <Box3>선호하는 와인 산지</Box3>
          <Box5>선호하는 포도 품종</Box5>
        </ColumnWrapper>
      </Wrapper>
    </Container>
  );
};

export default ReportBox;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_white_gray};

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  color: ${({ theme }) => theme.colors.font_black};
`;

const ColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Box2 = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border_lightgray};
`;

const Box3 = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border_lightgray};
`;

const Box4 = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border_lightgray};
`;

const Box5 = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border_lightgray};
`;
