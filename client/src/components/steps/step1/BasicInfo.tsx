import React from 'react';
import styled from 'styled-components';
import {
  Line,
  StyledInput,
  StyledInputLabel,
} from '../../../styles/GlobalStyle';

const BasicInfo = () => {
  return (
    <Container>
      <Title>기본 정보</Title>
      <Line />
      <Wrapper>
        <Image />
        <InputBox>
          <StyledInputLabel>
            <span>와인명</span>
            <StyledInput
              type='text'
              placeholder='빈티지를 제외한 영문명을 작성해주세요'
            />
          </StyledInputLabel>
          <StyledInputLabel>
            <span>와이너리명</span>
            <StyledInput type='text' placeholder='영문명을 작성해주세요' />
          </StyledInputLabel>
          <StyledInputLabel>
            <span>가격</span>
            <StyledInput type='text' placeholder='숫자만 작성해주세요' />
          </StyledInputLabel>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default BasicInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.div`
  width: 230px;
  height: 230px;
  background-color: #dedede;
  border-radius: 12px;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;
