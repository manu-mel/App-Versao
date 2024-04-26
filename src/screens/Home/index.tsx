import React, { useState } from 'react';
import { Label } from './styles';
import api from '../../services/api';
import Button from '../../components/Button';
import { Alert, Text } from 'react-native';

interface Product {
  id: string;
  title: string;
}

const Home = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const handleConsulta = async () => {
    try {
      const response = await api.get('/products/1');

      // const data = response.data.map(item => {
      //   return {
      //     id: item.id,
      //     title: item.title,
      //   };
      // });

      const data = response.data;
      setProducts(data);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <Label>Home</Label>
      <Button label={'Consultar'} onPress={handleConsulta} />
      {/* {products?.map(item => {
        <Text>{item.title}</Text>;
      })} */}
      <Text>{products.title}</Text>
    </>
  );
};

export default Home;
