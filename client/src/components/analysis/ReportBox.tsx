import React from 'react';
import styled from 'styled-components';
import { defaultWidth } from '../../styles/GlobalStyle';

const ReportBox = () => {
  return (
    <Container>
      <Wrapper>
        <ColumnWrapper>
          <Box1>나의 와인 생활</Box1>
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

const Box1 = styled.div`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 20px;
`;

const Box2 = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 20px;
`;

const Box3 = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  border-radius: 20px;
`;

const Box4 = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 20px;
`;

const Box5 = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 20px;
`;
