import styled from 'styled-components/native';

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
  font-size: 17px;
  color: ${({ theme }) => theme.colors.labelButton};
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;
