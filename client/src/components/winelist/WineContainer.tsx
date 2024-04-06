import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import FilterSelect from '../common/FilterSelect';
import { wineDummy } from '../../data/wineDummy';
import Wine from '../common/Wine';
import WineDetailModal from './wineDetailModal/WineDetailModal';

const WineContainer: React.FC = () => {
  const [selectedWine, setSelectedWine] = useState<string | null>(null);
  return (
    <Container>
      <TopBar>
        <Total>총 12개의 와인 기록이 있습니다.</Total>
        <FilterSelect />
      </TopBar>
      <WineWrapper>
        {wineDummy.map((data) => {
          return (
            <Wine
              key={data.id}
              wineData={data}
              onClick={() => setSelectedWine(data.id)}
            />
          );
        })}
      </WineWrapper>
      <AnimatePresence>
        {selectedWine && (
          <WineDetailModal
            layoutId={selectedWine}
            setSelectedWine={setSelectedWine}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default WineContainer;

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopBar = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Total = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 5px;
`;

const WineWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
