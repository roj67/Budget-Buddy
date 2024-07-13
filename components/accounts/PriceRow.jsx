import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PriceRow({label, price, type}) {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
      <Text style={styles.text}>{label}</Text>
      <Text style={[styles.text, { color: type == 'income' ? Colors.GREEN: Colors.RED}]}>${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
      fontFamily: 'dm-sans-semi-bold',
      fontSize: 18,
      margin: 4,
      color: Colors.TEXT_COLOR
    }
  })