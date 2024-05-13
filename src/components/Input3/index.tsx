import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

import BarScanner from '../BarScanner';

import {
  Container,
  InputContainer,
  InputElement,
  Label,
  Icon,
  IconCamera,
  IconClear,
  RightButton,
} from './styles';

interface InputProps extends TextInputProps {
  label: string;
  icon?: string;
  clearButton?: boolean;
  qrCode?: boolean;
  qrCodeReadCallback?: (value: string) => void;
  clearButtonCallback?: () => void;
}

const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      icon,
      clearButton,
      qrCode,
      qrCodeReadCallback,
      clearButtonCallback,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [barScannerVisible, setBarScannerVisible] = useState(false);

    const handleInputFocus = (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      setIsFocused(true);

      if (rest.onFocus) rest.onFocus(e);
    };

    const handleInputBlur = (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      setIsFocused(false);

      if (rest.onBlur) rest.onBlur(e);
    };

    const setQrCodeToInputValue = (value: string) => {
      if (qrCodeReadCallback) qrCodeReadCallback(value);
    };

    const handleClearButtonClick = () => {
      if (clearButtonCallback) clearButtonCallback();
    };

    let disabled = false;

    if ('editable' in rest) disabled = !rest.editable;

    return (
      <Container>
        <Label>{label}</Label>
        <InputContainer isFocused={isFocused}>
          {!!icon && <Icon name={icon} />}

          <InputElement
            ref={ref}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
          {!!qrCode && (
            <RightButton
              disabled={disabled}
              onPress={() => setBarScannerVisible(!barScannerVisible)}>
              <IconCamera
                name="camera"
                style={disabled && { color: '#E3E2E2' }}
              />
            </RightButton>
          )}

          {!!clearButton && (
            <RightButton onPress={() => handleClearButtonClick()}>
              <IconClear name="close" />
            </RightButton>
          )}
        </InputContainer>
        <BarScanner
          isVisible={barScannerVisible}
          setIsVisible={setBarScannerVisible}
          setValue={setQrCodeToInputValue}
        />
      </Container>
    );
  },
);

export default Input;

Input.defaultProps = {
  icon: '',
  clearButton: false,
  qrCode: false,
  qrCodeReadCallback: undefined,
  clearButtonCallback: undefined,
};
