import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';
import { IUser } from '../../types/profile';
import { Container, Label, Title, Bold } from './styles';

const Profile = () => {
  const [user, setUser] = useState<IUser>();

  const loadUser = async () => {
    try {
      const response = await api.get('/users/1');
      const data = response.data;

      setUser(data);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    loadUser();
  });

  return (
    <>
      <Title>Personal Information</Title>
      <Container>
        <Label>
          <Bold>Name: </Bold>
          {user?.name.firstname}
        </Label>
        <Label>
          <Bold>Last Name: </Bold>
          {user?.name.lastname}
        </Label>
        <Label>
          <Bold>User Name: </Bold>
          {user?.username}
        </Label>
        <Label>
          <Bold>E-mail: </Bold>
          {user?.email}
        </Label>
        <Label>
          <Bold>Phone: </Bold>
          {user?.phone}
        </Label>
      </Container>
      <Title>Address Information</Title>
      <Container>
        <Label>
          <Bold>Number: </Bold>
          {user?.address.number}
        </Label>
        <Label>
          <Bold>Street: </Bold>
          {user?.address.street}
        </Label>
        <Label>
          <Bold>Zip Code: </Bold>
          {user?.address.zipcode}
        </Label>
        <Label>
          <Bold>City: </Bold>
          {user?.address.city}
        </Label>
      </Container>
    </>
  );
};

export default Profile;
