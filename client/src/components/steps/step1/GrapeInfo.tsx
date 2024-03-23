import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from '../../../styles/GlobalStyle';
import GrapeInput from './GrapeInput';
import { AiOutlinePlus } from 'react-icons/ai';
import uuid from 'react-uuid';
import { GrapeData } from '../../../types/grapeInfo';

const GrapeInfo = () => {
  const [grapeData, setGrapeData] = useState<GrapeData[]>([
    {
      id: uuid(),
      name: '',
      percent: 0,
    },
  ]);

  /* ----- 품종 추가 함수 ----- */
  const addNewGrape = () => {
    const newData = {
      id: uuid(),
      name: '',
      percent: 0,
    };

    setGrapeData((prev) => [...prev, newData]);
  };

  /* ----- 품종 삭제 함수 ----- */
  const deleteGrape = (id: string) => {
    const filtered = grapeData.filter((grape) => grape.id !== id);
    setGrapeData(filtered);
  };

  /* ----- 품종 업데이트 함수 ----- */
  const updateGrape = (newData: GrapeData) => {
    setGrapeData((prev) =>
      prev.map((grape) =>
        grape.id === newData.id ? { ...grape, ...newData } : grape
      )
    );
  };

  return (
    <Container>
      <TitleBar>
        <h3>품종 정보</h3>
        <AddButton onClick={addNewGrape}>
          <AiOutlinePlus />
          품종 추가
        </AddButton>
      </TitleBar>
      <Line />
      <InputWrapper>
        {grapeData.map((data, i) => (
          <GrapeInput
            key={i}
            grapeData={data}
            updateGrape={updateGrape}
            deleteGrape={deleteGrape}
          />
        ))}
      </InputWrapper>
    </Container>
  );
};

export default GrapeInfo;

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }
`;

const AddButton = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.bg_lightgray};

  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
