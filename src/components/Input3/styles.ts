import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface InputContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputContainer = styled.View<InputContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 36px;
  border: 1px solid #bbbbbb;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: none;

  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0px 1px 3px #0000005a;
      border-color: #727272;
      elevation: 6;
    `}
`;

export const Icon = styled(FontAwesome5)`
  font-size: 18px;
  width: 25px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconCamera = styled(FontAwesome5)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RightButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
`;

export const IconClear = styled(FontAwesome)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputElement = styled(TextInput)`
  flex: 1;
  width: 100%;
  height: 36px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 5px;
`;
