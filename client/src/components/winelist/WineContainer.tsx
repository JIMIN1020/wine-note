import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import FilterSelect from '../common/FilterSelect';
import Wine from '../common/Wine';
import WineDetailModal from './wineDetailModal/WineDetailModal';
import { wineAPI } from '../../apis/api/wine';
import { WineListItem } from '../../types/api/response';

const WineContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [wineData, setWineData] = useState<WineListItem[]>([]);
  const [selectedWine, setSelectedWine] = useState<number | null>(null);

  const getAllWineData = async () => {
    await wineAPI.getAllWine().then((res) => {
      if (res?.isSuccess) {
        setWineData(res!.result);
      }
    });
  };

  useEffect(() => {
    getAllWineData();
  }, []);

  useEffect(() => {
    if (wineData) {
      setLoading(false);
    }
  }, [wineData]);

  return (
    <Container>
      <TopBar>
        <Total>총 {wineData.length}개의 와인 기록이 있습니다.</Total>
        <FilterSelect />
      </TopBar>
      <WineWrapper>
        {!loading &&
          wineData!.map((data: WineListItem) => {
            return (
              <Wine
                key={data.id}
                wineData={data}
                onClick={() => setSelectedWine(data.id)}
              />
            );
          })}
      </WineWrapper>
      {/* 와인 상세 모달 */}
      <AnimatePresence>
        {selectedWine && <WineDetailModal setSelectedWine={setSelectedWine} />}
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
