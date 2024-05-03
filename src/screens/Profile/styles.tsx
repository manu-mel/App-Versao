import styled from 'styled-components/native';

export const Label = styled.Text`
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin-bottom: 10px;
`;
