import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function AccountDetail({type, price, bottomSheetModalRef }) {
    const [icon, setIcon] = useState();
    const [name, setName] = useState();
    const [prices, setPrices] = useState();
    
    useEffect(()=>{
      setPrices(price);
      setName(type);
      switch (type) {
        case 'Bank':
          setIcon(
            <View style={[styles.iconBG, styles.bankBG]}>
              <FontAwesome name="bank" size={24} color={Colors.BLUE} />
            </View>
          );
          break;
        case 'Credit Card':
          setIcon(
            <View style={[styles.iconBG, styles.creditCardBG]}>
              <AntDesign name="creditcard" size={24} color={Colors.RED} />
            </View>
          );
          break;
        case 'Cash':
          setIcon(
            <View style={[styles.iconBG, styles.cashBG]}>
              <FontAwesome5 name="money-bill" size={20} color={Colors.GREEN} />
            </View>
          );
          break;
        case 'Savings':
          setIcon(
            <View style={[styles.iconBG, styles.savingsBG]}>
              <MaterialCommunityIcons name="piggy-bank-outline" size={24} color={Colors.ORANGE} />
            </View>
          );
          break;
        case 'Online Wallet':
          setIcon(
            <View style={[styles.iconBG, styles.onlineWalletBG]}>
              <Entypo name="wallet" size={24} color={Colors.BROWN} />
            </View>
          );
          break;
        case 'Investment':
          setIcon(
            <View style={[styles.iconBG, styles.investmentBG]}>
              <Entypo name="bar-graph" size={24} color={Colors.YELLOW} />
            </View>
          );
          break;
        case 'Others':
          setIcon(
            <View style={[styles.iconBG, styles.othersBG]}>
              <Entypo name="dots-three-horizontal" size={24} color={Colors.VIOLET} />
            </View>
          );
          break;
        default:
          break;
      }
    },[])
  return (
    <View>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15
        }}>
            {icon}
            <Text style={{
                fontFamily: 'dm-sans-bold',
                fontSize: 25,
                color: Colors.TEXT_COLOR
            }}>{name}</Text>
        </View>
        <TextInput onChangeText={setPrices} placeholder={name} style={styles.textInput} keyboardType='numeric' value={prices?.toString()}></TextInput>
        <View style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10
            }}>
              <TouchableOpacity
                  onPress={() => bottomSheetModalRef.current.close()}
                  style={{
                      width: '50%',
                      padding: 12,
                      borderWidth: 1,
                      borderRadius: 10,
                      marginTop:20
                  }}>
                      <Text style={{
                          textAlign: 'center',
                          color: Colors.BLACK,
                          fontFamily: 'dm-sans-semi-bold',
                          fontSize: 17
                      }}>Cancel</Text>
              </TouchableOpacity> 
              <TouchableOpacity 
                  style={{
                      width: '50%',
                      backgroundColor: Colors.BLACK,
                      padding: 12,
                      borderRadius: 10,
                      marginTop: 20
                  }}>
                      <Text style={{
                          textAlign: 'center',
                          color: Colors.WHITE,
                          fontFamily: 'dm-sans-semi-bold',
                          fontSize: 17
                      }}>Update</Text>
              </TouchableOpacity> 
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
      padding: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 20,
      fontSize: 18,
      fontFamily: 'dm-sans-semi-bold'
    },
    iconBG:{
      padding: 8,
      height: 40,
      width: 40,
      borderRadius: 4
    },
    bankBG: {
      backgroundColor: Colors.BLUE_BG
    },
    creditCardBG: {
      backgroundColor: Colors.RED_BG
    },
    cashBG: {
      backgroundColor: Colors.GREEN_BG
    },
    savingsBG: {
      backgroundColor: Colors.PINK_BG
    },
    onlineWalletBG: {
      backgroundColor: Colors.BROWN_BG
    },
    investmentBG: {
      backgroundColor: Colors.YELLOW_BG
    },
    othersBG: {
      backgroundColor: Colors.VIOLET_BG
    },
  })