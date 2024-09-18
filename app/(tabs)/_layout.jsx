import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: Colors.PRIMARY,
      }}>
        <Tabs.Screen name='mytrip'
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon:({color}) => <FontAwesome6 name="location-dot" size={24}  />
        }}
        />
        <Tabs.Screen name='discover'
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon:({color}) => <FontAwesome6 name="plane" size={24}  />
        }}
        />
        <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color}) => <FontAwesome6 name="user-large" size={24}  />
        }}
        />
    </Tabs>
  )
}