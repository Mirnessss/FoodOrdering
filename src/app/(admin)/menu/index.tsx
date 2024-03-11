import { FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductEditItem from '@/src/components/ProductEditItem';



export default function MenuScreen() {
  return (
      <FlatList 
      data={products}
      renderItem={({ item }) => <ProductEditItem product={item} /> }
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      />
  );
}




