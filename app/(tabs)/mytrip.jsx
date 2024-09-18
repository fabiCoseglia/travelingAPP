import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {
  const [userTrips,setUserTrips]= useState([])
  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor: Colors.WHITE,
      height:'100%',
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:35
        }}>MyTrips</Text>
        <FontAwesome6 name="add" size={38} color="black" />
      </View>
      {userTrips.length === 0 ?
        <StartNewTripCard/>
        : null
      }
    </View>
  )
}