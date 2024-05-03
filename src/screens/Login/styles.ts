import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  height: 97%;
`;

export const Label = styled.Text`
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin-bottom: 10px;
  font-weight: bold;
`;

export const TextVersion = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.TextVersion};
`;
