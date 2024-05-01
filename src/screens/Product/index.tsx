import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { AppRoutesProps } from '../../types/routes';
import api from '../../services/api';
import { IProduct } from '../Home';
import {
  Bold,
  Container,
  ImageBox,
  Label,
  LabelEmpty,
  ProductDescription,
} from './styles';
import formatPrice from '../../services/formatter';
import Button from '../../components/Button';

const Product = ({
  route,
  navigation,
}: DrawerScreenProps<AppRoutesProps, 'Product'>) => {
  const productId = route.params?.productId;
  const [product, setProduct] = useState<IProduct>();

  const handleLoadScreen = async () => {
    try {
      const response = await api.get(`/products/${productId}`);
      const data = response.data;

      setProduct(data);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    handleLoadScreen();
  });

  return (
    <>
      {product ? (
        <ScrollView>
          <Container>
            <ImageBox
              source={{
                uri: product?.image,
              }}
            />
            <Label>{product?.title}</Label>
            <Label>U$ {formatPrice(product.price.toString())}</Label>
            <ProductDescription>
              <Bold>Product Description: </Bold>
              {product?.description}
            </ProductDescription>
            <Button
              label="Add to cart"
              onPress={() =>
                navigation.navigate('Cart', { productId: product.id })
              }
            />
          </Container>
        </ScrollView>
      ) : (
        <LabelEmpty>Nothing to see here yet...</LabelEmpty>
      )}
    </>
  );
};

export default Product;
