import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContainer, InputElement, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer>
        <InputElement {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
