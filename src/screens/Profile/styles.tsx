import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin: 15px 30px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Container = styled.View`
  border: 1px;
  margin: 0px 15px 0px 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.labelBox};
  margin: 20px;
`;
