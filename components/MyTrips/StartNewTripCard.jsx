import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '../../constants/Colors';

export default function StartNewTripCard() {
  return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:20
    }}>
      <FontAwesome6 name="location-dot" size={45} color="black" />
      <Text
      style={{
        fontFamily:'outfit-medium',
        fontSize:25,
      }}
      >No trips planned yet</Text>
      <Text
      style={{
        fontFamily:'outfit',
        fontSize:20,
        color: 'darkgray',
        textAlign:'center'
      }}
      >Looks like it's time to plan a new tavel experience!. Get started below!</Text>

    <TouchableOpacity
    style={{
        padding:10,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal:30,
    }}
    >
      <Text
      style={{
        color: Colors.WHITE,
        fontFamily: 'outfit',
        fontSize:20,
      }}
      >Start a new trip</Text>
    </TouchableOpacity>
    </View>
  )
}