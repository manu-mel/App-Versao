import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  height: 97%;
`;

export const Label = styled.Text`
  display: flex;
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin-bottom: 10px;
`;

export const TextVersion = styled.Text`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.TextVersion};
`;
