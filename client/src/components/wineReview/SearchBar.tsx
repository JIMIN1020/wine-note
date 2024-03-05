import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

const SearchBar: React.FC = () => {
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  return (
    <Container>
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
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h3`
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  display: flex;
  align-items: flex-end;
  gap: 5px;

  & svg {
    width: 16px;
    height: 16px;
  }

  & small {
    font-size: ${({ theme }) => theme.fontSize.sm};
    align-self: flex-end;
  }
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
