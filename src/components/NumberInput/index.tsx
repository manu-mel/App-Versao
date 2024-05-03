import React from 'react';
import { TextInputProps } from 'react-native';
import {
  Container,
  InputElement,
  SideButtonLeft,
  SideButtonRight,
  Symbol,
} from './styles';

interface InputProps extends TextInputProps {
  value: string;
}

const NumberInput = ({ value, ...rest }: InputProps) => {
  return (
    <>
      <Container>
        <SideButtonLeft>
          <Symbol>-</Symbol>
        </SideButtonLeft>
        <InputElement keyboardType="number-pad" value={value} {...rest} />
        <SideButtonRight>
          <Symbol>+</Symbol>
        </SideButtonRight>
      </Container>
    </>
  );
};

export default NumberInput;
