import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';

const ReviewBox: React.FC = () => {
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  return (
    <Container>
      <Search>
        <Title>
          <IoSearchSharp />
          Search
        </Title>
        <InputWrapper>
          <SearchInput
            type='text'
            placeholder='와인명 검색'
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <SearchButton $inputFocused={inputFocused}>
            <IoIosSearch />
          </SearchButton>
        </InputWrapper>
      </Search>
      <Title>
        <MdOutlineFormatListBulleted />
        Category <small>(12)</small>
      </Title>
      <span>
        <BiCategory />
        All
      </span>
    </Container>
  );
};

export default ReviewBox;

const Container = styled.div`
  width: 230px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
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

const Search = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 38px 10px 10px;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border_gray};
  font-size: ${({ theme }) => theme.fontSize.base};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.wine_purple};
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #aaaaaad2;
  }
`;

const SearchButton = styled.button<{ $inputFocused: boolean }>`
  background-color: ${({ $inputFocused, theme }) =>
    $inputFocused ? theme.colors.wine_purple : '#f2f2f2'};
  border-radius: 0px 8px 8px 0px;
  border: 1px solid
    ${({ $inputFocused, theme }) =>
      $inputFocused ? theme.colors.wine_purple : theme.colors.border_gray};
  border-left: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 24px;
    height: 24px;
    color: ${({ $inputFocused, theme }) =>
      $inputFocused ? 'white' : theme.colors.border_gray};
  }
`;
