import React from 'react';

import Input from '../../components/Input';
import { Container, Label, TextVersion } from './styles';
import Button from '../../components/Button';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AppRoutesProps } from '../../types/routes';

const Login = ({ navigation }: DrawerScreenProps<AppRoutesProps, 'Login'>) => {
  return (
    <>
      <Container>
        <Label>Entre ou cadastre-se no App</Label>

        <Input label={'Usuário'} />
        <Input label={'Senha'} secureTextEntry />

        <Button label={'Entrar'} onPress={() => navigation.navigate('Home')} />
      </Container>
      <TextVersion>v 1.0.0</TextVersion>
    </>
  );
};

export default Login;
