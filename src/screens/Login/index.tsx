import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Label, TextVersion } from './styles';

const Login = () => {
  return (
    <>
      <Container>
        <Label>Entre ou cadastre-se no App</Label>

        <Input label={'Usuário'} />
        <Input label={'Senha'} secureTextEntry />

        <Button label={'Entrar'} />
      </Container>
      <TextVersion>v 1.0.0</TextVersion>
    </>
  );
};

export default Login;
