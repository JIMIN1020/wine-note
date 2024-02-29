import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const TitleBox: React.FC = () => {
  return (
    <TitleWrapper>
      <PageTitle>
        <h2>와인 기록</h2>
        <span>내가 마신 와인을 기록하고 관리해보세요!</span>
      </PageTitle>
      <AddButton>
        <AiOutlinePlus />
        새로운 와인 기록 추가
      </AddButton>
    </TitleWrapper>
  );
};

export default TitleBox;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px 80px 50px 80px;
`;

const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h2 {
    font-size: 28px;
    font-weight: 700;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const AddButton = styled.button`
  padding: 12px 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme }) => theme.colors.text_black};

  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  & svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    scale: calc(1.05);
    transition: scale 0.3s ease-in-out;
  }
`;
