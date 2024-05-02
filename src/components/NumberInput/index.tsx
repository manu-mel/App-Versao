import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputElement, SideButton } from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

const NumberInput = () => {
  return (
    <>
      <Container>
        <SideButton />
        <InputElement />
        <SideButton />
      </Container>
    </>
  );
};

export default NumberInput;
