import styled from 'styled-components/native';

export const InputElement = styled.TextInput`
  width: 37px;
  height: 24px;
  font-size: 16px;
  padding: 0 5px;
  border: 1px;
  text-align: center;
`;

export const SideButtonRight = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.numberInput};
  height: 26px;
  width: 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const SideButtonLeft = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.numberInput};
  height: 26px;
  width: 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Container = styled.View`
  flex-direction: row;
  width: 75px;
  align-items: center;
`;

export const Symbol = styled.Text`
  font-size: 16px;
  text-align: center;
  color: black;
`;
