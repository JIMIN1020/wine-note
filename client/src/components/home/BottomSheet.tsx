import React from 'react';
import styled from 'styled-components';
import Wine from '../common/Wine';
import { defaultWidth } from '../../styles/GlobalStyle';
import { wineDummy } from '../../data/wineDummy';

const BottomSheet: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title>지민님을 위한 오늘의 추천 와인!</Title>
          <span>지민님이 높은 평점을 준 와인과 비슷한 와인을 찾아봤어요</span>
        </TitleWrapper>
        <WineWrapper>
          {wineDummy.map((data) => {
            return (
              <Wine
                key={data.wine_id}
                wineData={data}
                onClick={() => console.log('test')}
              />
            );
          })}
        </WineWrapper>
      </Wrapper>
    </Container>
  );
};

export default BottomSheet;

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  box-sizing: content-box;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 12px;

  & span {
    color: ${({ theme }) => theme.colors.text_gray};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;

const WineWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 70px;
`;
