import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

type FlagProps = {
  countryName: string;
};

const Flag = ({ countryName }: FlagProps) => {
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
    <FlagCircle>
      <img src={flagUrl} alt={`Flag of ${countryName}`} />
    </FlagCircle>
  );
};

export default Flag;

const FlagCircle = styled.div`
  width: 15px;
  height: 15px;
  overflow: hidden;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid ${({ theme }) => theme.colors.border_gray};

  & img {
    height: 100%;
  }
`;
