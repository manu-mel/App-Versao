import styled from 'styled-components/native';

export const Label = styled.Text`
  display: flex;
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin: 10px;
`;

export const BoxProduct = styled.View`
  height: 130px;
  background-color: ${({ theme }) => theme.colors.productBox};
  width: 95%;
  margin: 10px 10px 0 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const BoxImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  margin: 10px;
`;

export const BoxTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin: 5px;
  max-width: 250px;
  text-align: left;
`;

export const ContainerScreen = styled.View`
  height: 92%;
`;
