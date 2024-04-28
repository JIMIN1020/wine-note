import React from 'react';
import styled from 'styled-components';
import CustomSelect from '../../common/CustomSelect';
import {
  LabelInput,
  LabelInputWrapper,
  StyledInput,
  StyledInputLabel,
} from '../../../styles/CustomInputs';
import { LiaWonSignSolid } from 'react-icons/lia';
import { useFormContext } from 'react-hook-form';
import SubFormLayout from '../../layout/SubFormLayout';

const BasicInfo = () => {
  const { register, setValue, watch } = useFormContext();

  /* ----- 천 단위 콤마(,) 추가 함수 ----- */
  const addComma = (p: string) => {
    return p?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /* ----- price onChange 함수 ----- */
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setValue('step1[price]', +value.replace(/[^\d]/g, ''));
  };

  return (
    <SubFormLayout title='기본 정보'>
      <Wrapper>
        <ImageWrapper>
          <WineImage src={watch('step1[wineImg]')} alt='wine image' />
        </ImageWrapper>
        <InputBox>
          <StyledInputLabel>
            <span>와인명</span>
            <StyledInput
              type='text'
              placeholder='빈티지를 제외한 영문명을 작성해주세요'
              {...register('step1[wineName]', { required: true })}
            />
          </StyledInputLabel>
          <StyledInputLabel>
            <span>와인 종류</span>
            <CustomSelect type='wine type' />
          </StyledInputLabel>
          <RowWrapper>
            <StyledInputLabel>
              <span>가격</span>
              <LabelInputWrapper>
                <LabelInput
                  type='text'
                  placeholder='숫자만 작성해주세요'
                  onChange={(e) => onChangePrice(e)}
                  value={addComma(watch('step1[price]')) || ''}
                />
                <Icon>
                  <LiaWonSignSolid />
                </Icon>
              </LabelInputWrapper>
            </StyledInputLabel>
            <StyledInputLabel>
              <span>빈티지</span>
              <CustomSelect type='vintage' />
            </StyledInputLabel>
          </RowWrapper>
        </InputBox>
      </Wrapper>
    </SubFormLayout>
  );
};

export default BasicInfo;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const WineImage = styled.img`
  height: 100%;
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

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
