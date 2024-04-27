import React, { useState } from 'react';
import api from '../../services/api';
import Button from '../../components/Button';
import { Alert } from 'react-native';
import {
  ContainerBox,
  ContainerScrollView,
  ImageBox,
  LabelBox,
  LabelCategorybox,
  ProductBox,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
}

const Home = () => {
  const [products, setProducts] = useState<Array<Product[]>>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const handleLoadScreen = async () => {
    try {
      const responseCategories = await api.get('/products/categories');
      const categoryNames = responseCategories.data;

      setCategories(categoryNames);

      const categoryProductsPromises = categoryNames.map(
        async (category: string) => {
          const response = await api.get(`/products/category/${category}`);
          return response.data.map((item: Product) => ({
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

  return (
    <>
      <Button label={'Consultar'} onPress={handleLoadScreen} />
      <ContainerScrollView>
        {categories.map((category, index) => (
          <>
            <LabelCategorybox>{category}</LabelCategorybox>
            <ScrollView horizontal key={category}>
              <ContainerBox key={category}>
                {products[index]?.map(product => (
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
        ))}
      </ContainerScrollView>
    </>
  );
};

export default Home;
