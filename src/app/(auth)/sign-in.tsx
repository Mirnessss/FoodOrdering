import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Stack, Link } from 'expo-router'
import React, { useState } from 'react'
import Button from '@/src/components/button'
import Colors from '@/src/constants/Colors'
import { supabase } from '@/src/lib/supabase'

const SignInScreen = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

async function signInWithEmail() {
 setLoading(true);
 const { error } = await supabase.auth.signInWithPassword({ email, password, })

 if (error) Alert.alert(error.message)
 setLoading(false);

}

  return (
    <View style={styles.container}>
        <Stack.Screen 
        options={ { title: "Sign In" } } />
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
      <Button onPress={signInWithEmail} disabled={loading} text={loading ? "Signing in.." : "Sign in"} />
      <Link href="/sign-up" style={styles.textButton}>Create an account</Link>
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

export default SignInScreen