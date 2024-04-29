import styled from 'styled-components/native';

export const Label = styled.Text`
  display: flex;
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.labelBox};
  margin-bottom: 10px;
`;
