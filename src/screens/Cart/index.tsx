import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { IProduct } from '../../types/home';
import { AppRoutesProps } from '../../types/routes';
import Button from '../../components/Button';
import NumberInput from '../../components/NumberInput';
import api from '../../services/api';
import {
  BoxImage,
  BoxProduct,
  BoxTitle,
  ContainerScreen,
  Label,
  SidewaysContainer,
} from './styles';

const Cart = ({ route }: DrawerScreenProps<AppRoutesProps, 'Cart'>) => {
  const productId = route.params?.productId;

  const [product, setProduct] = useState<IProduct>();
  const [itemPrice, setItemPrice] = useState(0);

  const handleLoadItems = async () => {
    try {
      const response = await api.get(`/products/${productId}`);
      const data = response.data;

      setProduct(data);
      setItemPrice(response.data.price);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    handleLoadItems();
  });

  const handleChange = (qty: string) => {
    const iQty = parseFloat(qty) || 0;
    const newValue = iQty * itemPrice;

    setItemPrice(newValue);
  };

  return (
    <>
      <View>
        {productId ? (
          <>
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
                      <BoxTitle>Total: U$ </BoxTitle>
                      <NumberInput
                        onChangeText={value => {
                          handleChange(value);
                        }}
                      />
                    </SidewaysContainer>
                  </View>
                </BoxProduct>
              </ScrollView>
            </ContainerScreen>
            <Button label="Purchase" />
          </>
        ) : (
          <Label>No items in this cart, keep shopping!</Label>
        )}
      </View>
    </>
  );
};

export default Cart;
