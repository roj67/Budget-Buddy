import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';

export default function Expense() {
  return (
    <View style={styles.screenContainer}>
      <View style={{
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <TouchableOpacity style={{
          backgroundColor: Colors.BLACK,
          padding: 10,
          borderRadius: 12
        }}>
          <Text style={{
            fontFamily: 'dm-sans-medium',
            color: Colors.WHITE
          }}>Add Expense</Text>
        </TouchableOpacity> 
      </View>
      <View style={{
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontFamily: 'dm-sans-semi-bold',
          fontSize: 18,
          textAlign: 'center'
        }}>
          No expense has been added. {"\n"}
          Press the add expense button to add expense.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.BACKGROUND // Container background color
  }
});