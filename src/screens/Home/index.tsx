import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { AppRoutesProps } from '../../types/routes';
import { IProduct } from '../../types/home';
import api from '../../services/api';
import formatPrice from '../../services/formatter';
import {
  ContainerBox,
  ContainerScrollView,
  ImageBox,
  LabelBox,
  LabelCategorybox,
  ProductBox,
} from './styles';

const Home = ({ navigation }: DrawerScreenProps<AppRoutesProps, 'Home'>) => {
  const [products, setProducts] = useState<Array<IProduct[]>>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const handleLoadScreen = async () => {
    try {
      const responseCategories = await api.get('/products/categories');
      const categoryNames = responseCategories.data;

      setCategories(categoryNames);

      const categoryProductsPromises = categoryNames.map(
        async (category: string) => {
          const response = await api.get(`/products/category/${category}`);
          return response.data.map((item: IProduct) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
          }));
        },
      );

      const categoryProducts = await Promise.all(categoryProductsPromises);
      setProducts(categoryProducts);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const handleProductClick = (id: string) => {
    navigation.navigate('Product', { productId: id });
  };

  useEffect(() => {
    handleLoadScreen();
  }, []);

  return (
    <>
      <ContainerScrollView>
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <LabelCategorybox>{category}</LabelCategorybox>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              key={index}>
              <ContainerBox>
                {products[index]?.map(product => (
                  <ProductBox
                    key={product.id}
                    onPress={() => handleProductClick(product.id)}>
                    <ImageBox
                      source={{
                        uri: product.image,
                      }}
                    />
                    <LabelBox numberOfLines={1}>{product.title}</LabelBox>
                    <LabelBox numberOfLines={1}>
                      U$ {formatPrice(product.price.toString())}
                    </LabelBox>
                  </ProductBox>
                ))}
              </ContainerBox>
            </ScrollView>
          </React.Fragment>
        ))}
      </ContainerScrollView>
    </>
  );
};

export default Home;
