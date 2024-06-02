import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useStore from '../../../store/store';
import { wineAPI } from '../../../apis/api/wine';

function DeleteButton() {
  const { selectedWine } = useStore();

  const handleDelete = async () => {
    await wineAPI.deleteWine(selectedWine!.review.wine_id).then((res) => {
      if (res?.isSuccess) {
        window.location.reload();
      }
    });
  };

  return (
    <Button onClick={handleDelete}>
      <RiDeleteBin6Line size={18} />
      리뷰 삭제
    </Button>
  );
}

export default DeleteButton;

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_darkgray};
  cursor: pointer;

  padding: 12px 16px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c3c3c338;
  }
`;
