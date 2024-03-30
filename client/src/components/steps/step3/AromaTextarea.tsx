import React from 'react';
import styled from 'styled-components';
import StepSubTitle from '../StepSubTitle';
import { FormTextarea } from '../../../styles/FormTextarea';

const AromaTextarea = () => {
  return (
    <Container>
      <StepSubTitle title='와인의 향' />
      <FormTextarea placeholder='와인에서 감지되는 향을 모두 적어보세요.' />
    </Container>
  );
};

export default AromaTextarea;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
`;
