import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledInput } from '../../../styles/GlobalStyle';
import { LuGrape } from 'react-icons/lu';

const GrapeInput = () => {
  const [percent, setPercent] = useState<string>('%');
  const [focus, setFocus] = useState<boolean>(false);

  const onChangePercent = (e: any) => {
    const value = e.target.value;
    const num = +value.replaceAll('%', '');

    if (value === '') {
      setPercent('%');
    } else if (isNaN(num) || num > 100) {
      return;
    } else {
      setPercent(value.includes('%') ? value : value + '%');
    }
  };
  return (
    <InputWrapper onBlur={() => setFocus(false)}>
      <Input type='text' onFocus={() => setFocus(true)} $focus={focus} />
      <PercentInput
        type='text'
        value={percent}
        onChange={onChangePercent}
        onFocus={() => setFocus(true)}
        $focus={focus}
      />
      <IconBox>
        <LuGrape />
      </IconBox>
    </InputWrapper>
  );
};

export default GrapeInput;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Input = styled(StyledInput)<{ $focus: boolean }>`
  width: 100%;
  padding-left: 42px;
  border-radius: 12px 0 0 12px;
  color: ${({ theme }) => theme.colors.font_gray};

  ${({ $focus }) =>
    $focus &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.wine_purple};
      color: ${({ theme }) => theme.colors.font_black};
    `}
`;

const PercentInput = styled(StyledInput)<{ $focus: boolean }>`
  width: 60px;
  border-radius: 0 12px 12px 0;
  border-left: none;
  text-align: end;
  color: ${({ theme }) => theme.colors.font_gray};

  &:focus {
    border-left: none;
  }

  ${({ $focus }) =>
    $focus &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.wine_purple};
      border-left: none;
      color: ${({ theme }) => theme.colors.font_black};
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
