import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Label, TextVersion } from './styles';
import { useAuth } from '../../providers/AuthProvider';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  return (
    <>
      <Container>
        <Label>Entre ou cadastre-se no App</Label>

        <Input label={'Usuário'} value={user} onChangeText={setUser} />
        <Input
          label={'Senha'}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        <Button label={'Entrar'} onPress={() => signIn(user, password)} />
      </Container>
      <TextVersion>v 1.0.0</TextVersion>
    </>
  );
};

export default Login;
