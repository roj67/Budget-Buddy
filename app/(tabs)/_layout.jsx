import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PURPLE,
            tabBarLabelStyle: styles.tabStyle,
            tabBarStyle: {
                elevation: 0,
                padding: 10,
                paddingBottom: 10,
                height: 60,
                borderColor: Colors.DIVIDER
            }
        }} sceneContainerStyle={{
            backgroundColor: Colors.BACKGROUND,
        }}>
            <Tabs.Screen name="home"
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => <Ionicons name="home-outline" size={24} color={color}/>
            }} />
            <Tabs.Screen name="this-month"
            options={{
                tabBarLabel: "This Month",
                tabBarIcon: ({color}) => <Ionicons name="calendar-number-outline" size={24} color={color} />
            }} />
            <Tabs.Screen name="accounts"
            options={{
                tabBarLabel: "Accounts",
                tabBarIcon: ({color}) => <Ionicons name="card-outline" size={24} color={color} />
            }} />
            <Tabs.Screen name="settings"
            options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({color}) => <Ionicons name="settings-outline" size={24} color={color} />
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        fontFamily: 'dm-sans-semi-bold',
        fontSize: 12
    }
})