import React from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { Box, Title } from './styles';
import { Modal } from 'react-native';
import Button from '../../components/Button';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AppRoutesProps } from '../../types/routes';

const LogOut = ({
  navigation,
}: DrawerScreenProps<AppRoutesProps, 'LogOut'>) => {
  const { signOut } = useAuth();

  return (
    <>
      <Modal animationType="fade" transparent>
        <Box>
          <Title>Do you want to log out of this account?</Title>
          <Button
            label="Log Out"
            onPress={() => {
              signOut();
            }}
          />
          <Button
            label="Cancel"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default LogOut;
