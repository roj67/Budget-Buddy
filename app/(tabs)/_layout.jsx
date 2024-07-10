import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PURPLE,
            tabBarStyle: {
                backgroundColor: Colors.BACKGROUND,
                elevation: 0,
                padding: 10,
                paddingBottom: 10,
                height: 60
            }
        }} sceneContainerStyle={{
            backgroundColor: Colors.BACKGROUND,
            padding: 20,
            paddingTop: 50
        }}>
            <Tabs.Screen name="overview"
            options={{
                tabBarLabel: "Overview",
                tabBarIcon: ({color}) => <Ionicons name="bar-chart-outline" size={24} color={color} />
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