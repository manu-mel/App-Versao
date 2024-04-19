import React from 'react';
import { ComponentButton, Container, Label } from './styles';
import { TouchableOpacityProps } from 'react-native';

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
