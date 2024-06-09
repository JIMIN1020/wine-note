import React from 'react';
import styled from 'styled-components';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import CategoryItem from './CategoryItem';
import { CATEGORY } from '@/constants/category';
import { useSearchParams } from 'react-router-dom';
import { QUERY_STRING } from '@/constants/queryString';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickCategory = (id: number) => {
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set(QUERY_STRING.CATEGORY, id.toString());
    setSearchParams(newQuery);
  };

  return (
    <Container>
      <Title>
        <MdOutlineFormatListBulleted size={18} />
        Category
      </Title>
      <Wrapper>
        {CATEGORY.map((data) => (
          <CategoryItem
            key={data.id}
            isSelected={+searchParams.get(QUERY_STRING.CATEGORY)! === data.id}
            onClick={() => handleClickCategory(data.id)}
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
