import React from 'react';
import { Modal } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useAuth } from '../../providers/AuthProvider';
import Button from '../../components/Button';
import { AppRoutesProps } from '../../types/routes';
import { Box, Title } from './styles';

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
