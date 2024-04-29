import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ComponentButton, Container, Label } from './styles';

interface Props extends TouchableOpacityProps {
  label: string;
}

const Button = ({ label, ...rest }: Props) => {
  return (
    <>
      <Container>
        <ComponentButton {...rest}>
          <Label>{label}</Label>
        </ComponentButton>
      </Container>
    </>
  );
};

export default Button;
