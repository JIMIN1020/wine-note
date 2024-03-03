import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdFilterListAlt } from 'react-icons/md';

const CustomSelect = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(options[0].label);
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
    setSelected(label);
    setOpen(false);
  };

  return (
    <Container ref={outsideRef}>
      <SelectBox onClick={() => setOpen((prev) => !prev)}>
        <span>{selected}</span>
        <MdFilterListAlt />
      </SelectBox>
      {open && (
        <OptionBox>
          {options.map((data) => {
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

const options = [
  { id: 'recent', label: '최근 작성 순' },
  { id: 'low_price', label: '가격 낮은 순' },
  { id: 'high_price', label: '가격 높은 순' },
  { id: 'low_rating', label: '평점 낮은 순' },
  { id: 'high_rating', label: '평점 높은 순' },
];

const Container = styled.div`
  display: flex;
  position: relative;
`;

const SelectBox = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text_black};
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg_white};

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
  }
`;

const OptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: -170px;

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
