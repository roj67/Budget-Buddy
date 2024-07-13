import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function AccountItem({type, price}) {
    const [icon, setIcon] = useState();
    const [name, setName] = useState();
  
    useEffect(()=>{
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
      <View style={{
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row', 
          gap: 20,
          alignItems: 'center'
        }}>
          {icon}
          <View>
            <Text style={{
              fontFamily: 'dm-sans-medium',
              fontSize: 18,
              color: Colors.FRENCH_GRAY 
            }}>{name}</Text>
            <Text style={{
              fontFamily: 'dm-sans-semi-bold',
              fontSize: 20
            }}>${price}</Text>
          </View>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      </View>
    )
}

const styles = StyleSheet.create({
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