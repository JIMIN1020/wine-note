import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from '../../../styles/GlobalStyle';
import CustomSelect from '../../common/CustomSelect';
import {
  LabelInput,
  LabelInputWrapper,
  StyledInput,
  StyledInputLabel,
} from '../../../styles/CustomInputs';
import { LiaWonSignSolid } from 'react-icons/lia';

const BasicInfo = () => {
  const [price, setPrice] = useState<string>('');

  /* ----- 천 단위 콤마(,) 추가 함수 ----- */
  const addComma = (p: string) => {
    return p?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /* ----- price onChange 함수 ----- */
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setPrice(value.replace(/[^\d]/g, ''));
  };

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
            <span>와인 종류</span>
            <CustomSelect />
          </StyledInputLabel>
          <StyledInputLabel>
            <span>가격</span>
            <LabelInputWrapper>
              <LabelInput
                type='text'
                placeholder='숫자만 작성해주세요'
                onChange={(e) => onChangePrice(e)}
                value={addComma(price) || ''}
              />
              <Icon>
                <LiaWonSignSolid />
              </Icon>
            </LabelInputWrapper>
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

const Icon = styled.div`
  position: absolute;
  top: 7px;
  left: 12px;

  & svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.border_gray};
  }
`;
