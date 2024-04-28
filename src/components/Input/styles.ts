import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 55px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 14px;
  width: 90%;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 36px;
  border: 1px solid #bbbbbb;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  box-shadow: none;
`;

export const InputElement = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 36px;
  font-size: 16px;
  padding: 0 5px;
`;
