import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { LuGrape } from 'react-icons/lu';
import { StyledInput } from '@/styles/CustomInputs';
import { GrClose } from 'react-icons/gr';
import { LiaPercentSolid } from 'react-icons/lia';
import { useFormContext } from 'react-hook-form';

type GrapeInputProps = {
  index: number;
  remove: (index?: number | number[] | undefined) => void;
};

const GrapeInput = ({ index, remove }: GrapeInputProps) => {
  const { register, setValue, watch } = useFormContext();
  const [focus, setFocus] = useState<boolean>(false);

  /* ----- percentage input onchange 함수 ----- */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // 숫자만

    let updateData;

    // 비었을 경우 0
    if (value === '') updateData = 0;
    else {
      // 0~100 사이로만!
      updateData = Math.min(+value, 100);
    }

    // 업데이트 하기
    setValue(`step1[grapes[${index}].percent]`, updateData);
  };

  return (
    <Container onBlur={() => setFocus(false)}>
      <InputContainer>
        <InputWrapper>
          <Input
            type='text'
            onFocus={() => setFocus(true)}
            $focus={focus}
            {...register(`step1[grapes[${index}].name]`)}
          />
          <IconBox>
            <LuGrape />
          </IconBox>
        </InputWrapper>
        <InputWrapper>
          <PercentInput
            type='text'
            value={watch(`step1[grapes[${index}].percent]`)}
            onChange={(e) => onChange(e)}
            onFocus={() => setFocus(true)}
            $focus={focus}
          />
          <PercentIcon>
            <LiaPercentSolid />
          </PercentIcon>
        </InputWrapper>
      </InputContainer>
      <DeleteBtn onClick={() => remove(index)}>
        <GrClose />
      </DeleteBtn>
    </Container>
  );
};

export default GrapeInput;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled(StyledInput)<{ $focus: boolean }>`
  width: 100%;
  padding-left: 42px;
  border-radius: 10px 0 0 10px;
  color: ${({ theme }) => theme.colors.text_gray};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 20px 0px;

  ${({ $focus }) =>
    $focus &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.wine_purple};
      color: ${({ theme }) => theme.colors.text_black};
    `}
`;

const InputWrapper = styled.div`
  position: relative;
`;

const PercentInput = styled(StyledInput)<{ $focus: boolean }>`
  width: 65px;
  border-radius: 0 10px 10px 0;
  border-left: none;
  text-align: end;
  color: ${({ theme }) => theme.colors.text_gray};
  padding-right: 30px;

  &:focus {
    border-left: none;
  }

  ${({ $focus }) =>
    $focus &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.wine_purple};
      border-left: none;
      color: ${({ theme }) => theme.colors.text_black};
    `}
`;

const IconBox = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;

  & svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.border_gray};
  }
`;

const PercentIcon = styled.div`
  position: absolute;
  top: 9px;
  right: 12px;

  & svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.border_gray};
  }
`;

const DeleteBtn = styled.button`
  width: 18px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;
