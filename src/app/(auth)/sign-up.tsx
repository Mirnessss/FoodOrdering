import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Stack, Link } from 'expo-router'
import React, { useState } from 'react'
import Button from '@/src/components/button'
import Colors from '@/src/constants/Colors'



const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
  
    <View style={styles.container}>
        <Stack.Screen 
        options={ { title: "Sing Up" } } />
      <Text style={styles.label}>Email</Text>
      <TextInput 
      value={email}
      onChangeText={setEmail}
      placeholder='jon@gmail.com'
      style={styles.input}
      />
       <Text style={styles.label}>Password</Text>
      <TextInput 
      value={password}
      onChangeText={setPassword}
      placeholder=''
      style={styles.input}
      secureTextEntry
      />
      <Button text="Create account" />
      <Link href="/sign-in" style={styles.textButton}>Sign in</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },

    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
     },

   input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
   },

   label: {
    color: 'gray',
    fontSize: 16
},
})

export default SignUpScreen