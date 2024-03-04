import { View, FlatList, Platform, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {  useCart } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem'
import Button from '../components/button'

const CartScreen = () => {
const { items, total } = useCart()

  return (
    <View style = {{padding:10}}>
       <FlatList data = {items} 
       renderItem={({ item }) => <CartListItem cartItem={item} />}
       contentContainerStyle= {{gap: 10}}
       />
      <Text>Total:{total}€</Text>
      <Button text="Checkout"  />

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
