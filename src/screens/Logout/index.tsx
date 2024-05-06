import React from 'react';
import { Modal } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useAuth } from '../../providers/AuthProvider';
import Button from '../../components/Button';
import { AppRoutesProps } from '../../types/routes';
import { Background, Box, Title } from './styles';

const LogOut = ({
  navigation,
}: DrawerScreenProps<AppRoutesProps, 'LogOut'>) => {
  const { signOut } = useAuth();

  return (
    <>
      <Modal animationType="fade" transparent>
        <Box>
          <Background>
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
          </Background>
        </Box>
      </Modal>
    </>
  );
};

export default LogOut;
