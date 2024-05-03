import React, { useEffect, useState } from 'react';
import {
  BoxImage,
  BoxProduct,
  BoxTitle,
  ContainerScreen,
  Label,
  SidewaysContainer,
} from './styles';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AppRoutesProps } from '../../types/routes';
import { Alert, View } from 'react-native';
import { IProduct } from '../Home';
import api from '../../services/api';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import NumberInput from '../../components/NumberInput';

const Cart = ({ route }: DrawerScreenProps<AppRoutesProps, 'Cart'>) => {
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
                <SidewaysContainer>
                  <BoxTitle>Total: U$ 00.00</BoxTitle>
                  <NumberInput value="1" />
                </SidewaysContainer>
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
