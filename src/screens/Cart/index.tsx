import React, { useEffect, useState } from 'react';
import {
  BoxImage,
  BoxProduct,
  BoxTitle,
  ContainerScreen,
  Label,
} from './styles';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AppRoutesProps } from '../../types/routes';
import { Alert, View } from 'react-native';
import { IProduct } from '../Home';
import api from '../../services/api';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = ({ route }: DrawerScreenProps<AppRoutesProps, 'Product'>) => {
  const productId = route.params?.productId;

  const [product, setProduct] = useState<IProduct>();

  const handleLoadItems = async () => {
    try {
      const response = await api.get(`/products/${productId}`);
      const data = response.data;

      setProduct(data);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    handleLoadItems();
  });

  return (
    <>
      <View>
        <ContainerScreen>
          <ScrollView>
            <Label>Finish purchasing your items!</Label>
            <BoxProduct>
              <BoxImage
                source={{
                  uri: product?.image,
                }}
              />
              <View>
                <BoxTitle numberOfLines={1}>{product?.title}</BoxTitle>
                <BoxTitle>U$ {product?.price}</BoxTitle>
              </View>
            </BoxProduct>
          </ScrollView>
        </ContainerScreen>

        <Button label="Purchase" />
      </View>
    </>
  );
};

export default Cart;
