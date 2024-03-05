import React from 'react';
import styled from 'styled-components';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';

const Category: React.FC = () => {
  return (
    <Container>
      <Title>
        <MdOutlineFormatListBulleted />
        Category <small>(12)</small>
      </Title>
      <Wrapper>
        <CategoryBox>
          <BiCategory />
          <span>All</span>
        </CategoryBox>
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

  & svg {
    width: 18px;
    height: 18px;
  }

  & small {
    font-size: ${({ theme }) => theme.fontSize.sm};
    align-self: flex-end;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  border-radius: 8px;
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.font_gray};

  & svg {
    width: 16px;
    height: 16px;
  }
`;
