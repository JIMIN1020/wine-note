import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getTypeFromLabel, wineTypeOptions } from '../../data/selectOptionData';
import { MdArrowForwardIos } from 'react-icons/md';
import { useFormContext } from 'react-hook-form';
import { wineColor } from '../../data/wineColorData';
import { WineColorDataType } from '../../types/steps/step2';

const CustomSelect = () => {
  const { watch, setValue } = useFormContext();
  const [open, setOpen] = useState<boolean>(false);
  const outsideRef = useRef<HTMLDivElement | null>(null);

  // 바깥 클릭 시 처리
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (outsideRef.current && !outsideRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [outsideRef]);

  const onClickOption = (label: string) => {
    setValue('step1[wineType]', label);
    const type = getTypeFromLabel(label) as keyof WineColorDataType;
    setValue('step2[color]', wineColor[type][0].code);
    setOpen(false);
  };

  return (
    <Container ref={outsideRef}>
      <SelectBox onClick={() => setOpen((prev) => !prev)}>
        <Selected>{watch('step1[wineType]')}</Selected>
        <MdArrowForwardIos />
      </SelectBox>
      {open && (
        <OptionBox>
          {wineTypeOptions.map((data) => {
            return (
              <Option key={data.id} onClick={() => onClickOption(data.label)}>
                {data.label}
              </Option>
            );
          })}
        </OptionBox>
      )}
    </Container>
  );
};

export default CustomSelect;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Selected = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
`;

const SelectBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: content-box;

  color: ${({ theme }) => theme.colors.text_black};
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg_white};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 20px 0px;
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.wine_purple};
    color: ${({ theme }) => theme.colors.wine_purple};
  }

  & svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.text_black};
    transform: rotate(90deg);
  }
`;

const OptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: -295px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bg_white};

  font-size: ${({ theme }) => theme.fontSize.sm};
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  overflow: hidden;
`;

const Option = styled.div`
  width: 100%;
  padding: 10px 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
