import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import Button from '../components/button';
import { Link, Redirect, Stack } from 'expo-router';
import { useAuth } from '../providers/AuthProvider';
import { supabase } from '../lib/supabase';

const Index = () => {
const {session, loading, isAdmin} = useAuth();

if (loading) {
  return <ActivityIndicator />
}

if (!session) {
  return <Redirect href={'/sign-in'} />
}

if (!isAdmin) {
  return <Redirect href={'/(user)'} />
}


  return (
    <View  style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Stack.Screen 
      options={{ title: 'Home' }} />
      <Link href={'/(user)'} asChild>
        <Button text="User" />
      </Link>
      <Link href={'/(admin)'} asChild>
        <Button text="Admin" />
      </Link>
      <Button onPress={() => supabase.auth.signOut()} text="Sign out" />
    </View>
  );
};

export default Index;