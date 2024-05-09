import React from 'react';
import Flag from '../common/Flag';
import styled from 'styled-components';
import { BiCategory } from 'react-icons/bi';
import { IoEarth } from 'react-icons/io5';
import { motion } from 'framer-motion';

interface CategoryItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  count: number;
}

const CategoryItem = ({
  label,
  isSelected,
  onClick,
  count,
}: CategoryItemProps) => {
  return (
    <Container
      $isSelected={isSelected}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      <FlagAndName>
        {label === 'All' && <BiCategory size={16} />}
        {label === '기타' && <IoEarth size={16} />}
        {label !== 'All' && label !== '기타' && (
          <Flag countryName={label} size='16px' />
        )}

        <h5>{label}</h5>
      </FlagAndName>
      <span>{count}</span>
    </Container>
  );
};

export default CategoryItem;

const Container = styled(motion.div)<{ $isSelected: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;

  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.wine_purple : theme.colors.border_gray};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  cursor: pointer;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.wine_purple : theme.colors.text_black};

  & h5 {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.wine_purple : theme.colors.text_gray};
  }
`;

const FlagAndName = styled.div`
  display: flex;
  gap: 10px;
`;
