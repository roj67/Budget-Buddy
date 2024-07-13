import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';

export default function Budget() {
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
          }}>Create Budget</Text>
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
          No budget plan has been created. {"\n"}
          Press the create budget button to create a new budget plan.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.BACKGROUND
  },
  container: {
    marginTop: 25,
    height: 100,
    backgroundColor: Colors.BACKGROUND,
    borderColor: Colors.DIVIDER,
    borderWidth: 1,
    borderRadius: 15,
    padding: 16,
    elevation: 1
  },
});