import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import { QUERY_STRING } from '@/constants/queryString';

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleSearch = async () => {
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set(QUERY_STRING.NAME, value);
    setSearchParams(newQuery);
  };

  const handleChange = (searchValue: string) => {
    if (searchValue.trim() === '') {
      const newQuery = new URLSearchParams(searchParams);
      newQuery.delete(QUERY_STRING.NAME);
      setSearchParams(newQuery);
    }
    setValue(searchValue);
  };

  return (
    <Container>
      <Title>
        <IoSearchSharp />
        Search
      </Title>
      <InputWrapper>
        <SearchInput
          type='text'
          value={value}
          placeholder='와인명 검색'
          $inputFocused={inputFocused}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => (value ? {} : setInputFocused(false))}
        />
        <SearchButton $inputFocused={inputFocused} onClick={handleSearch}>
          <IoIosSearch strokeWidth={5} />
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
  position: relative;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.basic};
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

const SearchInput = styled.input<{ $inputFocused: boolean }>`
  width: 100%;
  padding: 10px 38px 10px 10px;
  border-radius: 8px;
  border: 1.2px solid
    ${({ theme, $inputFocused }) =>
      $inputFocused ? theme.colors.wine_purple : theme.colors.border_gray};
  font-size: ${({ theme }) => theme.fontSize.base};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #aaaaaad2;
  }
`;

const SearchButton = styled.button<{ $inputFocused: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);

  & svg {
    width: 24px;
    height: 24px;
    color: ${({ $inputFocused, theme }) =>
      $inputFocused ? theme.colors.wine_purple : theme.colors.border_gray};
  }
`;
