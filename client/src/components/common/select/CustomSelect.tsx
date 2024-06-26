import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  getTypeFromId,
  getLabelFromId,
  vintageOptions,
} from '@/data/selectOptionData';
import { MdArrowForwardIos } from 'react-icons/md';
import { useFormContext } from 'react-hook-form';
import { wineColor } from '@/data/color';
import { WineColorDataType } from '@/types/formType';
import useClickOutside from '@/hooks/useClickOutside';
import { AnimatePresence, motion } from 'framer-motion';
import { WINE_TYPE_ARRAY } from '@/constants/wineType';

interface CustomSelectProps {
  type: 'wine type' | 'vintage';
}

const CustomSelect = ({ type }: CustomSelectProps) => {
  const { watch, setValue } = useFormContext();
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  /* ----- 모달 바깥 클릭 시 닫힘 ----- */
  useClickOutside(ref, () => setOpen(false));

  /* ----- type 옵션 클릭 시 처리 함수 ----- */
  const onClickType = (id: number) => {
    setValue('step1[wineType]', id);
    const type = getTypeFromId(id) as keyof WineColorDataType;
    setValue('step2[color]', wineColor[type][0].code);
    setOpen(false);
  };

  /* ----- vintage 옵션 클릭 시 처리 함수 ----- */
  const onClickVintage = (vin: number) => {
    setValue('step1[vintage]', vin);
    setOpen(false);
  };

  return (
    <Container ref={ref}>
      <SelectBox
        whileTap={{ scale: 0.98 }}
        $open={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Selected>
          {type === 'wine type'
            ? getLabelFromId(watch('step1[wineType]'))
            : watch('step1[vintage]')}
        </Selected>
        <MdArrowForwardIos />
      </SelectBox>
      <AnimatePresence>
        {open && (
          <OptionBox
            initial={{ opacity: 0.7, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {type === 'wine type'
              ? WINE_TYPE_ARRAY.map((data) => {
                  return (
                    <Option key={data.id} onClick={() => onClickType(data.id)}>
                      {data.label}
                    </Option>
                  );
                })
              : vintageOptions.map((data) => {
                  return (
                    <Option
                      key={data.id}
                      onClick={() => onClickVintage(data.year)}
                    >
                      {data.year}
                    </Option>
                  );
                })}
          </OptionBox>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CustomSelect;

const Container = styled(motion.div)`
  display: flex;
  position: relative;
  width: 100%;
`;

const Selected = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
`;

const SelectBox = styled(motion.div)<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: content-box;

  color: ${({ theme }) => theme.colors.text_black};
  border: 1px solid
    ${({ theme, $open }) =>
      $open ? theme.colors.wine_purple : theme.colors.border_gray};
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

const OptionBox = styled(motion.div)`
  width: 100%;
  height: 290px;
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
  overflow: auto;
`;

const Option = styled.div`
  width: 100%;
  padding: 10px 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
