import React, { useState } from 'react';
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
  const [qty, setQty] = useState(value);

  const handlePlus = () => {
    let number = parseFloat(qty);
    number += 1;

    setQty(number.toString());
  };

  const handleMinus = () => {
    let number = parseFloat(qty);
    if (number === 0) {
      return;
    }
    number -= 1;

    setQty(number.toString());
  };

  return (
    <>
      <Container>
        <SideButtonLeft>
          <Symbol onPress={handleMinus}>-</Symbol>
        </SideButtonLeft>
        <InputElement keyboardType="number-pad" value={qty} {...rest} />
        <SideButtonRight>
          <Symbol onPress={handlePlus}>+</Symbol>
        </SideButtonRight>
      </Container>
    </>
  );
};

export default NumberInput;
