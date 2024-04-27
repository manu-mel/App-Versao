import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Button from '../../components/Button';
import { Alert } from 'react-native';
import { ContainerBox, ImageBox, LabelBox, ProductBox } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
}

const Home = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    handleLoadScreen();
  }, []);

  const handleLoadScreen = async () => {
    try {
      const response = await api.get('/products/category/electronics');

      const data = response.data.map((item: Product) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
        };
      });

      setProducts(data);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <Button label={'Consultar'} onPress={handleLoadScreen} />
      <ScrollView horizontal>
        <ContainerBox>
          {products.map(product => (
            <ProductBox key={product.id}>
              <ImageBox
                source={{
                  uri: product.image,
                }}
              />
              <LabelBox numberOfLines={1}>{product.title}</LabelBox>
              <LabelBox numberOfLines={1}>R$ {product.price}</LabelBox>
            </ProductBox>
          ))}
        </ContainerBox>
      </ScrollView>
    </>
  );
};

export default Home;
