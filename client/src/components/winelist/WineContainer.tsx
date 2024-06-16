import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import FilterSelect from '../common/FilterSelect';
import Wine from '../common/Wine';
import WineDetailModal from './wineDetailModal/WineDetailModal';
import { WineListItem } from '@/models/wine.model';
import { useWines } from '@/hooks/useWines';
import useWineStore from '@/store/wineStore';
import useModalStore from '@/store/modalStore';

const WineContainer = () => {
  const { isLoading, wineData } = useWines();
  const { selectedWine, setSelectedWine } = useWineStore();
  const { openWineModal, setOpenWineModal } = useModalStore();

  if (selectedWine) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <TopBar>
        <Total>총 {wineData?.length || 0}개의 와인 기록이 있습니다.</Total>
        <FilterSelect />
      </TopBar>
      <WineWrapper>
        {!isLoading &&
          wineData!.map((data: WineListItem) => {
            return (
              <Wine
                key={data.wine_id}
                wineData={data}
                onClick={() => {
                  setOpenWineModal(true);
                  setSelectedWine(data.wine_id);
                }}
              />
            );
          })}
      </WineWrapper>
      {/* 와인 상세 모달 */}
      <AnimatePresence>{openWineModal && <WineDetailModal />}</AnimatePresence>
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
