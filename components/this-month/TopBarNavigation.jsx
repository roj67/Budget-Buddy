import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Expense from './Expense'
import Budget from './Budget'
import { Colors } from '../../constants/Colors'

const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Local Payments"
      screenOptions={{
        tabBarPosition: 'top',
        tabBarActiveTintColor: Colors.PURPLE,
        tabBarInactiveTintColor: Colors.GRAY,
        tabBarPressColor: Colors.BACKGROUND,
        pressOpacity: 0,
        tabBarStyle: {
            backgroundColor: Colors.BACKGROUND
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.PURPLE,
          height : 3
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'dm-sans-semi-bold',
          textTransform: 'capitalize'
        },
        tabBarContentContainerStyle: {
            
        },
        tabBarItemStyle: {}
      }}>
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{tabBarLabel: 'Expense'}}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{tabBarLabel: 'Budget'}}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabStyle: {
        fontFamily: 'dm-sans-semi-bold',
        fontSize: 12
    }
})