import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { flexCenter } from '../../styles/GlobalStyle';

type FlagProps = {
  countryName: string;
  size: string;
};

const Flag = ({ countryName, size }: FlagProps) => {
  const [flagUrl, setFlagUrl] = useState<string>('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const flagUrl = response.data[0].flags.svg;
        console.log(flagUrl);
        setFlagUrl(flagUrl);
      } catch (error) {
        console.error('Error fetching flag:', error);
      }
    };

    fetchFlag();
  }, [countryName]);

  return (
    <FlagCircle $size={size}>
      <img src={flagUrl} alt={`Flag of ${countryName}`} />
    </FlagCircle>
  );
};

export default Flag;

const FlagCircle = styled.div<{ $size: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  overflow: hidden;
  border-radius: 50%;

  ${flexCenter}
  border: 0.5px solid ${({ theme }) => theme.colors.border_gray};

  & img {
    height: 100%;
  }
`;
