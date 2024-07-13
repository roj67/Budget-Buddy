import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SettingItem({setting}) {
  const router = useRouter();
  return (
    <TouchableOpacity 
    onPress={() => router.push(setting.route)}
    style={{
        marginVertical: 5
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'
            }}>
                <Ionicons name={setting.icon} size={28} color="black" />
                <Text style={{
                    fontFamily: 'dm-sans-medium',
                    fontSize: 16
                }}>{setting.name}</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />    
        </View>
    </TouchableOpacity>
  );
}