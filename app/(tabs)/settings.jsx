import { View, Text, FlatList, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { SettingList } from '../../constants/Options'
import SettingItem from '../../components/settings/SettingItem'
import { auth } from './../../configs/firebaseConfig'
import { useRouter } from 'expo-router'

export default function Settings() {
  const router = useRouter();
  const user = auth.currentUser;
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
      }}>Settings</Text>

      <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 18,
          marginTop: 20,
          marginBottom: 10
      }}>{user.email}</Text>
      <View
        style={{
          marginVertical: 8,
          borderBottomColor: Colors.TEXT_COLOR,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <FlatList
      data = {SettingList}
      renderItem ={({item}) => <SettingItem setting={item} key={item.id}/>}
      keyExtractor={item=> item.id}
      />
    </View>
  )
}