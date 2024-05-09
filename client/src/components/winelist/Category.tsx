import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import { category } from '../../data/categoryData';
import CategoryItem from './CategoryItem';

const Category = () => {
  const [selected, setSelected] = useState<string>('All');
  return (
    <Container>
      <Title>
        <MdOutlineFormatListBulleted size={18} />
        Category
      </Title>
      <Wrapper>
        {category.map((data) => (
          <CategoryItem
            key={data.id}
            isSelected={selected === data.label}
            onClick={() => setSelected(data.label)}
            label={data.label}
            count={12}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  width: 230px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
