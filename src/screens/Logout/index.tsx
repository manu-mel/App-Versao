import React from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { Box, Title } from './styles';
import { Modal } from 'react-native';
import Button from '../../components/Button';

const LogOut = () => {
  const { signOut } = useAuth();

  return (
    <>
      <Modal animationType="fade" transparent>
        <Box>
          <Title>TESTE</Title>
          <Button
            label="Log Out"
            onPress={() => {
              signOut();
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default LogOut;
