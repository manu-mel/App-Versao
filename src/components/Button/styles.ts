import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ComponentButton = styled.TouchableOpacity`
  display: flex;
  padding: 9px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 20px;
  width: 90%;
`;

export const Label = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.labelButton};
`;
