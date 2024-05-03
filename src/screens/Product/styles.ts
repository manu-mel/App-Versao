import styled from 'styled-components/native';

export const ScrollContent = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.View`
  align-items: center;
  min-height: 100%;
  margin: 5px;
`;

export const Label = styled.Text`
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin: 5px;
`;

export const ImageBox = styled.Image`
  height: 500px;
  width: 90%;
  border-radius: 5px;
  margin: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const ProductDescription = styled.Text`
  font-size: 20px;
  margin: 20px;
`;

export const LabelEmpty = styled.Text`
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.labelBox};
`;
