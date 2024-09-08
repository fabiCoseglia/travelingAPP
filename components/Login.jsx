import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter()
  return (
    <View>
      <Image
      source={require('./../assets/images/login2.jpg')}
      style={{
        width:'100%',
        height:460,
      }}
      />

      <View style={styles.container} >
        <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:10
        }} >AI Travel Planner
        </Text>
        <Text style={{
            fontFamily:'outfit',
            textAlign:'center',
            fontSize:17,
            color: 'slategray',
            marginTop:20,
        }} >Discovery your next adventure. Personalized itineraries and travel with AI-driven insights </Text>

        <TouchableOpacity
        onPress={()=>router.push('auth/sign-in')}
        style={styles.button}>
            <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit',fontSize:17}}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.WHITE,
        marginTop:-30,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        padding: 15
    },
    button:{
        padding: 15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'25%'

    }
})