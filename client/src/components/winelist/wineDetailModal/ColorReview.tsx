import React from 'react';
import NoteLayout from '../../layout/NoteLayout';
import TextLine from '../../common/TextLine';
import styled from 'styled-components';
import useStore from '../../../store/store';

const ColorReview = () => {
  const { selectedWine } = useStore();
  return (
    <NoteLayout title='Color' sub='색'>
      <Content>
        <Wrapper>
          <TextLine title='Color' />
          <Color $color={selectedWine!.review.color} />
        </Wrapper>
        <TextLine
          title='Intensity'
          text={selectedWine!.review.color_intensity}
        />
      </Content>
    </NoteLayout>
  );
};

export default ColorReview;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Color = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;
