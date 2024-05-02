import styled from 'styled-components/native';

export const InputElement = styled.TextInput`
  width: 25px;
  height: 25px;
  font-size: 16px;
  padding: 0 5px;
  border: 1px;
`;

export const SideButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.numberInput};
  height: 26px;
  width: 25px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 75px;
  align-items: center;
`;
