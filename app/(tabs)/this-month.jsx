import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import TopBarNavigation from '../../components/this-month/TopBarNavigation'

export default function ThisMonth() {
  return (
    <View style={{
      padding: 20,
      paddingTop: 50,
      height: '100%'
    }}>
      <Text style={{
        fontFamily: 'dm-sans-semi-bold',
        fontSize: 30,
        color: Colors.TEXT_COLOR
      }}>This Month</Text>
      <TopBarNavigation/>
    </View>
  )
}