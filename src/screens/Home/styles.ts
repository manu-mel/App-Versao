import styled from 'styled-components/native';

export const ContainerScrollView = styled.View`
  height: 100%;
`;

export const LabelCategorybox = styled.Text`
  color: ${({ theme }) => theme.colors.labelBox};
  font-weight: bold;
  margin-left: 15px;
  text-transform: capitalize;
  font-size: 20px;
`;

export const ContainerBox = styled.View`
  height: 100%;
  flex-direction: row;
`;

export const ProductBox = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.productBox};
  width: 180px;
  border-radius: 10px;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.Image`
  height: 60%;
  width: 80%;
  border-radius: 5px;
`;

export const LabelBox = styled.Text`
  color: ${({ theme }) => theme.colors.labelBox};
  font-weight: strong;
  padding: 4px;
`;
