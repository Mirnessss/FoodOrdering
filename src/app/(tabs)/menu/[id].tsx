import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'
import { Stack } from 'expo-router';

const ProductDetailsScreen = () => {
const { id } = useLocalSearchParams();

  return (
    <View style={{ backgroundColor:'white' }}>
      <Stack.Screen options = {{ title: 'Details' + id }} />
        <Text style={{ fontSize: 20 }}>ProductDetailsScreen for id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen;