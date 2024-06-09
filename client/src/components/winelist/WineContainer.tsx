import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import FilterSelect from '../common/FilterSelect';
import Wine from '../common/Wine';
import WineDetailModal from './wineDetailModal/WineDetailModal';
import { WineListItem } from '../../types/api/response';
import useStore from '../../store/store';
import { useWines } from '@/hooks/useWines';

const WineContainer: React.FC = () => {
  const { handleClickWine, openWineModal, closeModal } = useWines();
  const { wineList } = useStore();

  if (openWineModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <TopBar>
        <Total>총 {wineList?.length || 0}개의 와인 기록이 있습니다.</Total>
        <FilterSelect />
      </TopBar>
      <WineWrapper>
        {wineList!.map((data: WineListItem) => {
          return (
            <Wine
              key={data.wine_id}
              wineData={data}
              onClick={() => handleClickWine(data.wine_id)}
            />
          );
        })}
      </WineWrapper>
      {/* 와인 상세 모달 */}
      <AnimatePresence>
        {openWineModal && <WineDetailModal closeModal={closeModal} />}
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
  gap: 30px;
`;
