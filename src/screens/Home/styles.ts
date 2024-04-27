import styled from 'styled-components/native';

export const ProductBox = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.productBox};
  width: 180px;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBox = styled.View`
  height: 25%;
  display: flex;
  flex-direction: row;
`;

export const ImageBox = styled.Image`
  height: 70%;
  width: 70%;
  border-radius: 5px;
`;

export const LabelBox = styled.Text`
  color: black;
  font-weight: strong;
`;
