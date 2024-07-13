import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

export default function ChangeCurrency() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  },[])
  return (
    <View style={{
      padding: 20,
      paddingTop: 85,
      height: '100%'
    }}>
      <Text>ChangeCurrency</Text>
    </View>
  )
}