import { useLocalSearchParams,  Stack, Link } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import products from '@/assets/data/products';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import { FontAwesome } from "@expo/vector-icons"
import { PizzaSize } from '@/src/types';
import Colors from '@/src/constants/Colors';



const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
const { id } = useLocalSearchParams();



const product = products.find((p) => p.id.toString() === id);



if (!product) {
  return <Text>Product not found</Text>
}


  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ 
          title: 'Menu',
        headerRight: () => (
          <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ), }}
        />
      <Stack.Screen options = {{ title: product?.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}€</Text>
    </View>
  )
}

const styles = StyleSheet.create (
  {
    container: {
      backgroundColor: 'white',
      flex: 1,
      padding: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.light.tint,
      marginTop: 10,
    },

    title: {
      fontSize: 20,
      fontWeight: '600',
      marginTop: 10,   
  },
})

export default ProductDetailsScreen;