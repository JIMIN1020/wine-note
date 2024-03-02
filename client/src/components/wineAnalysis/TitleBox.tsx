import React from 'react';
import styled from 'styled-components';
import { defaultWidth } from '../../styles/GlobalStyle';

const TitleBox: React.FC = () => {
  return (
    <TitleWrapper>
      <Wrapper>
        <PageTitle>
          <h2>와인 취향 분석</h2>
          <span>기록한 와인을 기반으로 지민님의 취향을 분석해봤어요</span>
        </PageTitle>
      </Wrapper>
    </TitleWrapper>
  );
};

export default TitleBox;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${defaultWidth}
  padding: 60px 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h2 {
    font-size: 28px;
    font-weight: 700;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
